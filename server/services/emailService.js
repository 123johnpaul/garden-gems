import nodemailer from "nodemailer";
import sendgrid from "nodemailer-sendgrid-transport"

const transporter = nodemailer.createTransport(sendgrid({
  auth:{
    api_key:'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'
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
    console.log("Email sent to:", to);
  } catch (err) {
    console.error("Email error:", err.message);
  }
};
