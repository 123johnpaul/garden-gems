import nodemailer from "nodemailer";
import sendgrid from "nodemailer-sendgrid-transport"
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport(sendgrid({
  auth:{
    api_key:process.env.SENDGRID_API_KEY
  }
}));

// reusable send function
export const sendEmail = async (email, subject, text) => {
  try {
    await transporter.sendMail({
      from: `"Garden Gems" <tosinosin798@gmail.com>`,
      to:email,
      subject:subject,
      text:text,
    });
    console.log("Email sent to:", email);
  } catch (err) {
    console.error("Email error:", err.message);
  }
};
