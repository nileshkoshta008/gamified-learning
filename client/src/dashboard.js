import React, { useState } from "react";
import { addPoints } from "./api";

export default function Dashboard() {
  const [points, setPoints] = useState(0);
  const [username] = useState("player1");

  const handleClick = async () => {
    const res = await addPoints({ username, points: 20 });
    setPoints(res.data.points);
  };

  const level = Math.floor(points / 100) + 1;

  return (
    <div>
      <h1>🎮 Dashboard</h1>
      <p>Points: {points}</p>
      <p>Level: {level}</p>

      <div style={{ background: "#ddd", height: "10px", width: "200px" }}>
        <div
          style={{
            background: "green",
            height: "10px",
            width: `${points % 100}%`
          }}
        ></div>
      </div>

      <button onClick={handleClick}>Complete Task (+20)</button>
    </div>
  );
}