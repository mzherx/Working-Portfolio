// /api/mail.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const { name, email, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or use SMTP config
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Contact form: ${service || "General Inquiry"}`,
      text: `From: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`,
    });

    return res.status(200).send("Message sent successfully!");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Something went wrong.");
  }
}
