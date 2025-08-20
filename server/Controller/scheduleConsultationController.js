import initDB from "../database/db.js";

export async function scheduleConsultation(req, res) {
  try {
    const { firstname, surname, middlename, phone, email, reservation_date } = req.body;

    if (!firstname || !surname || !middlename || !phone || !email || !reservation_date) {
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

    // TODO: send confirmation email via nodemailer
    res.status(201).json({ message: "Consultation scheduled successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
