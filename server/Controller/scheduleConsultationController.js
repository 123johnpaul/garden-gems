import initDB from "../database/db.js";
import { sendEmail } from "../services/emailService.js";
import { validationResult } from "express-validator";
import { initializePayment,verifyPayment } from "../services/paymentservice.js";


export async function scheduleConsultation(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { firstname, surname, middlename, phone, email, reservation_date } = req.body;

    // Create a data object with all the consultation details
    const consultationData = {
      firstname,
      surname,
      middlename,
      phone,
      email,
      reservation_date
    };
    console.log(consultationData)

    // Encode the data as JSON in the callback URL
    const encodedData = encodeURIComponent(JSON.stringify(consultationData));
    console.log(encodedData);

    const paymentInit = await initializePayment({
      email,
      amount: price,
      callback_url: `http://localhost:3000/schedule-consultation/verify?value=${encodedData}`,
    });

    const reference = paymentInit.data.reference;
    console.log("this is the reference:",reference);

    // Save data immediately with status "pending"
    await db.query(
      `INSERT INTO consultation (firstname, surname, middlename, phone, email, reservation_date, reference, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [firstname, surname, middlename, phone, email, reservation_date, reference, "pending"]
    );
    console.log("data has been inserted to database")

    return res.status(200).json({
      authorization_url: paymentInit.data.authorization_url,
      reference: paymentInit.data.reference,
      message: "Redirect user to Paystack for payment",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment initialization failed" });
  }
}

export async function verifyConsultationPayment(req, res) {
  try {
    const { id } = req.query;
    let reference = req.query.reference || req.query.trxref || null;

    const db = await initDB();

    // If id provided, fetch the stored row and get its reference
    let consultation;
    if (id) {
      const q = await db.query(
        `SELECT id, firstname, email, reservation_date, reference, status
         FROM consultation
         WHERE id = $1`,
        [id]
      );
      if (!q.rows.length) {
        return res.status(404).json({ error: "Consultation not found" });
      }
      consultation = q.rows[0];
      reference = consultation.reference || reference;
    }

    if (!reference) {
      console.error("verifyConsultationPayment: no reference available", { id, query: req.query });
      return res.status(400).json({ error: "Payment reference is required" });
    }

    // OPTIONAL: if already marked paid, short-circuit
    if (consultation && consultation.status === "paid") {
      return res.status(200).json({ status: "success", message: "Already verified/paid" });
    }

    // Verify with Paystack
    const verification = await verifyPayment(reference);

    if (!verification || !verification.data) {
      console.error("verifyConsultationPayment: invalid verification response", verification);
      return res.status(502).json({ error: "Invalid verification response from payment gateway" });
    }

    if (verification.data.status === "success") {
      // mark as paid in DB (by id if available, otherwise by reference)
      if (id) {
        await db.query(`UPDATE consultation SET status = $1 WHERE id = $2`, ["paid", id]);
      } else {
        await db.query(`UPDATE consultation SET status = $1 WHERE reference = $2`, ["paid", reference]);
      }

      // fetch (again) the details to send email
      const r = await db.query(
        `SELECT firstname, email, reservation_date FROM consultation WHERE ${id ? "id = $1" : "reference = $1"}`,
        [id || reference]
      );
      const details = r.rows[0] || {};

      // send confirmation email
      if (details.email) {
        try {
          await sendEmail(
            details.email,
            "Garden Gems Consultation",
            `Hello ${details.firstname || ""}, your consultation has been scheduled on ${details.reservation_date}.`
          );
        } catch (e) {
          console.warn("Failed to send confirmation email:", e);
        }
      }

      return res.status(200).json({
        status: "success",
        message: "Consultation verified and marked paid."
      });
    } else {
      // Not success
      console.warn("Payment verification failed for reference", reference, verification.data);
      return res.status(400).json({ error: "Payment verification failed", details: verification.data });
    }
  } catch (error) {
    console.error("Verification error:", error);
    return res.status(500).json({ error: "Something went wrong during verification" });
  }
}


export async function getLatestConsultation(req, res) {
  try {
    const db = await initDB();
    const sql = `SELECT id, firstname, email, reservation_date, reference, status, created_at
                 FROM consultation
                 ORDER BY created_at DESC
                 LIMIT 1`;
    const result = await db.query(sql);
    if (!result.rows.length) {
      return res.status(404).json({ error: "No consultations found" });
    }
    return res.json(result.rows[0]);
  } catch (err) {
    console.error("getLatestConsultation error:", err);
    return res.status(500).json({ error: "Failed to fetch latest consultation" });
  }
}


export async function getLatestConsultation(req, res) {
  try {
    const db = await initDB();
    const sql = `SELECT id, firstname, email, reservation_date, reference, status, created_at
                 FROM consultation
                 ORDER BY created_at DESC
                 LIMIT 1`;
    const result = await db.query(sql);
    if (!result.rows.length) {
      return res.status(404).json({ error: "No consultations found" });
    }
    return res.json(result.rows[0]);
  } catch (err) {
    console.error("getLatestConsultation error:", err);
    return res.status(500).json({ error: "Failed to fetch latest consultation" });
  }
}