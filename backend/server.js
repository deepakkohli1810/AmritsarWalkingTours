const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Main API Endpoint: Send Booking Email
app.post("/api/send-email", async (req, res) => {
  console.log("Received request on /api/send-email");
  try {
    const {
      user_name,
      user_email,
      user_phone,
      user_requests,
      bookingDetails, // Expected to include tourPrice, vehiclePrice, etc.
    } = req.body;

    // ✅ Validate required fields
    if (!user_name || !user_email || !bookingDetails) {
      console.error(
        "Validation failed: Missing required fields."
      );
      return res
        .status(400)
        .json({
          error:
            "Missing required fields: user_name, user_email, or bookingDetails.",
        });
    }

    // ✅ Extract data with fallbacks
    const numPersons = bookingDetails.numPersons || 1;
    const selectedVehicle =
      bookingDetails.selectedVehicle || "Not selected";
    const tourPrice = bookingDetails.tourPrice || "₹0";
    const vehiclePrice =
      bookingDetails.vehiclePrice || "₹0";
    const totalPrice = bookingDetails.totalPrice || "₹0";

    // ✅ Build Selection Summary
    let selectionSummary = "";
    if (bookingDetails.selectedPackage) {
      const pkg = bookingDetails.selectedPackage;
      selectionSummary = `Package: ${pkg.title}
Description: ${pkg.description}
Tours Included:
${pkg.tours.map((tour) => `  - ${tour.title} (${tour.price})`).join("\n")}`;
    } else if (bookingDetails.selectedTours?.length > 0) {
      selectionSummary = `Custom Tour:
${bookingDetails.selectedTours.map((tour) => `- ${tour.title} (${tour.price})`).join("\n")}`;
    } else {
      selectionSummary = "No tours selected.";
    }

    // ✅ Plain Text Email Body (improved readability)
    const emailBody = `
You have a new booking request from your Amritsar Walking Tour website!

-------------------------------------------------
👤 CUSTOMER DETAILS
-------------------------------------------------
Name  : ${user_name}
Email : ${user_email}
Phone : ${user_phone || "Not provided"}

-------------------------------------------------
🎫 BOOKING SUMMARY
-------------------------------------------------
Type       : ${bookingDetails.selectedPackage ? "Package" : "Custom Tour"}
Persons    : ${numPersons}
Vehicle    : ${selectedVehicle}
             ${bookingDetails.vehicleDetails?.desc || ""}

-------------------------------------------------
💰 PRICE BREAKDOWN
-------------------------------------------------
Tour Cost     : ${tourPrice}
Vehicle Cost  : ${vehiclePrice}
──────────────────────────────
Total Amount  : ${totalPrice}

-------------------------------------------------
📋 SELECTION DETAILS
-------------------------------------------------
${selectionSummary}

-------------------------------------------------
📝 SPECIAL REQUESTS
-------------------------------------------------
${user_requests?.trim() ? user_requests : "None provided."}

-------------------------------------------------
📅 Request Received At: ${new Date().toLocaleString()}
`;

    // ✅ Send Email via Resend
    const { data, error } = await resend.emails.send({
      from: "Amritsar Walking Tour <onboarding@resend.dev>", // Use your verified domain in production
      to: ["cloudwork18@gmail.com"], // Replace with your actual email
      reply_to: user_email,
      subject: `🎯 New Booking Request from ${user_name}`,
      text: emailBody,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return res
        .status(500)
        .json({ error: "Failed to send email." });
    }

    console.log("✅ Email sent successfully:", data);
    return res
      .status(200)
      .json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("🚨 Server error:", error);
    return res.status(500).json({
      error: "An internal server error occurred.",
      details: error.message,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(
    `🚀 Server is running on http://localhost:${PORT}`
  );
});
