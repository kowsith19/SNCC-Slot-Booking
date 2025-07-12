const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// ✅ Create the app BEFORE using it
const app = express();

// Load env vars
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/facilities", require("./routes/facilities"));
app.use("/api/bookings", require("./routes/bookings"));

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ MongoDB connected");
  app.listen(4000, () => {
    console.log("🚀 Server running on port 4000");
  });
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
});
