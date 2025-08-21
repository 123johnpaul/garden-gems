import initDB from "../database/db.js";
import { sendEmail } from "../services/emailService.js";

export async function scheduleConsultation(req, res) {
  try {
    const { firstname, surname, middlename, phone, email, reservation_date } =
      req.body;

    if (
      !firstname ||
      !surname ||
      !middlename ||
      !phone ||
      !email ||
      !reservation_date
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Simple regex for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const db = await initDB();
    await db.run(
      `INSERT INTO consultation (firstname, surname, middlename, phone, email, reservation_date)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [firstname, surname, middlename, phone, email, reservation_date]
    );

    try {
      await sendEmail(
        email,
        "Garden Gems Consultation",
        `Hello ${firstname},
        Your consultation has been successfully scheduled on ${reservation_date}.
        We’ll contact you at ${phone} if we need more details.
        Thank you,
        Garden Gems 🌱`
      );
    } catch (err) {
      console.log("Error sending emails", err);
    }

    res.status(201).json({ message: "Consultation scheduled successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
