import React, { useState } from "react";
import api from "../services/api";

const PunchInOut = () => {
  const [customerId, setCustomerId] = useState("");
  const [message, setMessage] = useState("");

  const handlePunchIn = async () => {
    try {
      const response = await api.post(`/customers/${customerId}/punch-in`);
      setMessage(response.data.message);
    } catch (error) {
      console.error("Punch-in error:", error);
      setMessage("Error recording punch-in");
    }
  };

  const handlePunchOut = async () => {
    try {
      const response = await api.post(`/customers/${customerId}/punch-out`);
      setMessage(response.data.message);
    } catch (error) {
      console.error("Punch-out error:", error);
      setMessage("Error recording punch-out");
    }
  };

  return (
    <div>
      <h2>Punch In/Out</h2>
      <input
        type="text"
        placeholder="Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
      />
      <button onClick={handlePunchIn}>Punch In</button>
      <button onClick={handlePunchOut}>Punch Out</button>
      <p>{message}</p>
    </div>
  );
};

export default PunchInOut;
