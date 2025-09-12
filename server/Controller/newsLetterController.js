import initDB from "../database/db.js";
import { sendEmail } from "../services/emailService.js";
import { validationResult } from "express-validator";

export async function subscribeNewsletter(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  try {
    const { email } = req.body;
    const db = await initDB();

    await db.query("INSERT INTO newsletter (email) VALUES ($1)", [email]);

    // Send confirmation email
    await sendEmail(
      email,
      "Garden Gems Newsletter Subscription ✅",
      "Thank you for subscribing to the Garden Gems newsletter! 🌱"
    );

    // Respond back to client
    res.status(201).json({ message: "Subscription successful" });
  } catch (error) {
    if (error.message.includes("duplicate key value violates unique constraint")) {
      return res.status(400).json({ error: "Email already subscribed" });
    }
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}