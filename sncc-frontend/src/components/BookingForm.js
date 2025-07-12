import React, { useState, useEffect } from "react";
import axios from "axios";

const BookingForm = () => {
  const [users, setUsers] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [formData, setFormData] = useState({
    user: "",
    facility: "",
    date: "",
    time: "",
  });

  // Load users and facilities on mount
  useEffect(() => {
    axios.get("http://localhost:4000/api/users").then((res) => setUsers(res.data));
    axios.get("http://localhost:4000/api/facilities").then((res) => setFacilities(res.data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/bookings/add", formData);
      alert("Booking successful!");
      console.log(res.data);
    } catch (err) {
      alert("Booking failed: " + err.response.data.error);
    }
  };

  return (
  <div className="bg-white p-4 rounded shadow">
    <h2 className="text-xl font-semibold mb-2">Book a Slot</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium">User</label>
        <select
          name="user"
          value={formData.user}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>{user.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium">Facility</label>
        <select
          name="facility"
          value={formData.facility}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Facility</option>
          {facilities.map((f) => (
            <option key={f._id} value={f._id}>{f.facility} - {f.sport}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Book Slot
      </button>
    </form>
  </div>
);
};

export default BookingForm;
