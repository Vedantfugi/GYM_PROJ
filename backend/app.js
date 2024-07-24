import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({ path: "./config.env" });


// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example sendEmail function usage
router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received request:", req.body); // Debug log
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }
  try {
    await sendEmail({
      email: "kashyapvedant03@gmail.com", // Replace with your desired email address
      subject: "GYM WEBSITE CONTACT",
      message: message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Error in /send/mail route:", error); // Debug log
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});


app.get("/", (req, res) => {
  res.send("Welcome to the Gym Website Backend");
});


app.use(router);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
