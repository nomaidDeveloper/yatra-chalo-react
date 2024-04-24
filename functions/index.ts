const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Initialize Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rishimakwana20@gmail.com",
    pass: "ipas gfxg nbtm dfxx",
  },
});

// Firebase Cloud Function to send email
exports.sendEmail = functions.https.onCall(async (data, context) => {
  const { name, email, address } = data;

  const mailOptions = {
    from: "rishimakwana20@gmail.com",
    to: email,
    subject: "Booking Confirmation",
    text: `Hello ${name}, Your booking has been confirmed. Delivery address: ${address}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new functions.https.HttpsError("internal", "Email sending failed");
  }
});
