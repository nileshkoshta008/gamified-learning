import React, { useEffect, useState } from "react";
import { getLeaderboard } from "./api";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getLeaderboard().then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      <h2>🏆 Leaderboard</h2>
      {users.map((u, i) => (
        <p key={i}>
          {i + 1}. {u.username} - {u.points}
        </p>
      ))}
    </div>
  );
}