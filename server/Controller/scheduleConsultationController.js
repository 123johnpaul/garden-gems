import initDB from "../database/db.js";
import { sendEmail } from "../services/emailService.js";
import { validationResult } from "express-validator";
import { initializePayment, verifyPayment } from "../services/paymentservice.js";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

export async function scheduleConsultation(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const db = await initDB();
    const result = await db.query(
      "SELECT price FROM services WHERE id = $1",
      [req.body.serviceId]
    );

    let price = result.rows[0]?.price || 10000;
    
    const { firstname, surname, middlename, phone, email, reservation_date } = req.body;

    const paymentInit = await initializePayment({
      email,
      amount: price,
      callback_url: `http://localhost:3000/schedule-consultation/verify?firstname=${firstname}&surname=${surname}&middlename=${middlename}&phone=${phone}&email=${email}&reservation_date=${reservation_date}`,
    });

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
    const { reference, firstname, surname, middlename, phone, email, reservation_date } = req.query;

    const verification = await verifyPayment(reference);

    if (verification.data.status === "success") {
      // Save consultation after payment success
      const db = await initDB();
      await db.query(
        `INSERT INTO consultation (firstname, surname, middlename, phone, email, reservation_date)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [firstname, surname, middlename, phone, email, reservation_date]
      );

      // Send confirmation email
      await sendEmail(
        email,
        "Garden Gems Consultation",
        `Hello ${firstname},
        Your consultation has been successfully scheduled on ${reservation_date}.
        We'll contact you at ${phone} if we need more details.
        Thank you,
        Garden Gems 🌱`
      );

      return res.status(201).json({ message: "Consultation scheduled successfully after payment" });
    } else {
      return res.status(400).json({ error: "Payment verification failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong during verification" });
  }
}