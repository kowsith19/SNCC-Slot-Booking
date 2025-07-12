const router = require("express").Router();
const Facility = require("../models/Facility");

// Add facility
router.post("/add", async (req, res) => {
  try {
    const facility = new Facility(req.body);
    await facility.save();
    res.json(facility);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all facilities
router.get("/", async (req, res) => {
  try {
    const facilities = await Facility.find(); // No .select()
    res.json(facilities);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Delete facility by ID
router.delete("/:id", async (req, res) => {
  try {
    await Facility.findByIdAndDelete(req.params.id);
    res.json({ message: "Facility deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;
