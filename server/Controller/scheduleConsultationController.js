import initDB from "../database/db.js";
import { sendEmail } from "../services/emailService.js";
import { validationResult } from "express-validator";
import {
  initializePayment,
  verifyPayment,
} from "../services/paymentservice.js";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

export async function scheduleConsultation(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const db = await initDB();
    const service = await db.get(
      "SELECT price FROM services WHERE id = ?",
      [req.body.serviceId] // frontend must send selected serviceId
    );

    let price = service?.price || 10000;
    
    const { firstname, surname, middlename, phone, email, reservation_date } =
      req.body;

    const paymentInit = await initializePayment({
      email,
      amount: price,
      callback_url: `https://garden-gems.vercel.app/schedule-consultation/verify?firstname=${firstname}&surname=${surname}&middlename=${middlename}&phone=${phone}&email=${email}&reservation_date=${reservation_date}`,
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
    const {
      reference,
      firstname,
      surname,
      middlename,
      phone,
      email,
      reservation_date,
    } = req.query;

    const verification = await verifyPayment(reference);

    if (verification.data.status === "success") {
      // Save consultation after payment success
      const db = await initDB();
      await db.run(
        `INSERT INTO consultation (firstname, surname, middlename, phone, email, reservation_date)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [firstname, surname, middlename, phone, email, reservation_date]
      );

      // Send confirmation email
      await sendEmail(
        email,
        "Garden Gems Consultation",
        `Hello ${firstname},
        Your consultation has been successfully scheduled on ${reservation_date}.
        We’ll contact you at ${phone} if we need more details.
        Thank you,
        Garden Gems 🌱`
      );

      return res
        .status(201)
        .json({ message: "Consultation scheduled successfully after payment" });
    } else {
      return res.status(400).json({ error: "Payment verification failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong during verification" });
  }
}
