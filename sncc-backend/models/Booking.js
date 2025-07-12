const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  facility: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Facility",
    required: true,
  },
  date: {
    type: String, // Format: "2025-07-10"
    required: true,
  },
  time: {
    type: String, // Format: "18:00" or "6 PM"
    required: true,
  }
});

module.exports = mongoose.model("Booking", bookingSchema);
