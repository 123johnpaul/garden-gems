import initDB from "../database/db.js";

export async function submitContactUs(req, res) {
  try {
    const { firstname, surname, middlename, email, phone, subject, message } = req.body;

    if (!firstname || !surname || !middlename || !email || !phone || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Simple regex for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

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
            `Your message has been recieved, you will be contacted in 48hrs.`
          );
        } catch (err) {
          console.log("Error sending emails", err);
        }

    res.status(201).json({ message: "Message submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
