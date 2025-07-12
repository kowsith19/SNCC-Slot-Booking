import React from "react";
import FacilityList from "./components/FacilityList";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        SNCC Slot Booking
      </h1>
      <FacilityList />
      <BookingForm />
    </div>
  );
}

export default App;
