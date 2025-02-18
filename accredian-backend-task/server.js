require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const nodemailer = require("nodemailer");

const app = express();
const prisma = new PrismaClient();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Backend Working" });
});
/** Route to Handle Referral Form Submission */
app.post("/api/refer", async (req, res) => {
  try {
    const { referrerName, referrerEmail, friendName, friendEmail } = req.body;

    if (!referrerName || !referrerEmail || !friendName || !friendEmail) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Save referral in MySQL database
    const referral = await prisma.referral.create({
      data: { referrerName, referrerEmail, friendName, friendEmail },
    });

    // Send Referral Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: friendEmail,
      subject: "You’ve been referred!",
      text: `Hello ${friendName},\n\n${referrerName} referred you! Check out our program now!`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Referral sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

/** Start the Server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
