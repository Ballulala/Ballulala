import React from "react";
import "./UserStats.css";

function UserStats({ mmr }) {
  return (
    <div className="user-stats">
      <p>MMR: {mmr}</p>
    </div>
  );
}

export default UserStats;
