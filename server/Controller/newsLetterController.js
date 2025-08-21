import initDB from "../database/db.js";
import { sendEmail } from "../services/emailService.js";

export async function subscribeNewsletter(req, res) {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Simple regex for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const db = await initDB();

    await db.run("INSERT INTO newsletter (email) VALUES (?)", [email]);

    // Send confirmation email
    await sendEmail(
      email,
      "Garden Gems Newsletter Subscription ✅",
      "Thank you for subscribing to the Garden Gems newsletter! 🌱"
    );

    // Respond back to client
    res.status(201).json({ message: "Subscription successful" });
  } catch (error) {
    if (error.message.includes("UNIQUE constraint failed")) {
      return res.status(400).json({ error: "Email already subscribed" });
    }
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
