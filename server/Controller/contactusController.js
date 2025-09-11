import initDB from "../database/db.js";
import { validationResult } from "express-validator";
import { sendEmail } from "../services/emailService.js";


export async function submitContactUs(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { firstname, surname, middlename, email, phone, subject, message } = req.body;
    const db = await initDB();
    await db.run(
      `INSERT INTO contactus (firstname, surname, middlename, email, phone, subject, message)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [firstname, surname, middlename, email, phone, subject, message]
    );

    try {
      await sendEmail(
        email,
        "Garden Gems Consultation",
        `Hello ${firstname},\n\nYour message has been received. You will be contacted within 48hrs.\n\nGarden Gems 🌱`
      );
    } catch (err) {
      console.error("Error sending email", err);
    }

    res.status(201).json({ message: "Message submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
