import React, { useState } from "react";
import axios from "axios";

export default function MonitorForm() {
  const [altitude, setAltitude] = useState("");
  const [his, setHis] = useState("");
  const [adi, setAdi] = useState("");

  const handleSend = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/data", {
        altitude: Number(altitude),
        his: Number(his),
        adi: Number(adi),
      });
      console.log("Server response:", response.data);
      alert("Data sent successfully");
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Sent declined");
    }
  };

  return (
    <div>
      <h2>Monitor Form</h2>

      <label>Altitude:</label>
      <input
        type="number"
        value={altitude}
        onChange={(e) => setAltitude(e.target.value)}
      />
      <br />

      <label>HIS:</label>
      <input
        type="number"
        value={his}
        onChange={(e) => setHis(e.target.value)}
      />
      <br />

      <label>ADI:</label>
      <input
        type="number"
        value={adi}
        onChange={(e) => setAdi(e.target.value)}
      />
      <br />

      <button onClick={handleSend}>SEND</button>
    </div>
  );
}
