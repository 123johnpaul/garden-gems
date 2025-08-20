import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // or use "hotmail", "yahoo", etc.
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // app password (not your main password)
  },
});

// reusable send function
export const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: `"Garden Gems" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });
    console.log("✅ Email sent to:", to);
  } catch (err) {
    console.error("❌ Email error:", err.message);
  }
};
