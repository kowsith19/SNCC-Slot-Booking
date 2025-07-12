const router = require("express").Router();
const Booking = require("../models/Booking");
const User = require("../models/User");
const Facility = require("../models/Facility");

// Create a booking
router.post("/add", async (req, res) => {
  try {
    const { user, facility, date, time } = req.body;

    // Check for clash
    const existingBooking = await Booking.findOne({ facility, date, time });
    if (existingBooking) {
      return res.status(400).json({
        error: "Slot already booked for this facility at the given time",
      });
    }

    // Save booking
    const booking = new Booking({ user, facility, date, time });
    await booking.save();

    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Get all bookings with populated user + facility
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email") // Only return name and email
      .populate("facility", "facility location sport");

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
