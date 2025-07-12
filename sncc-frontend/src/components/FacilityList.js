import React, { useEffect, useState } from "react";
import axios from "axios";

const FacilityList = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/facilities")
      .then((res) => setFacilities(res.data))
      .catch((err) => console.error("Error fetching facilities", err));
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
    <h2 className="text-xl font-semibold mb-2">Available Facilities</h2>
    <ul className="list-disc list-inside">
        {facilities.map((facility) => (
          <li key={facility._id}>
            <strong>{facility.facility}</strong> | {facility.sport} @ {facility.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacilityList;
