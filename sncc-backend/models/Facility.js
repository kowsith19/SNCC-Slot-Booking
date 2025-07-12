const mongoose = require("mongoose");

const facilitySchema = new mongoose.Schema({
  facility: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  sport: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Facility", facilitySchema);
