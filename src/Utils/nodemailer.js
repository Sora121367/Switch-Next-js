import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER, // Mailtrap username
    pass: process.env.MAILTRAP_PASS, // Mailtrap password
  },
});

export const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: "loemheng123kh@gmail.com", // Sender email
    to,                                     // Recipient email
    subject,                                // Email subject
    text,                                   // Email body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
