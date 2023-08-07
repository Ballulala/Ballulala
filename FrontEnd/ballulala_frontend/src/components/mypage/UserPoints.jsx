import React from "react";
import "./UserPoints.css";

function UserPoints({ points }) {
  return (
    <div className="user-points">
      <p>Points: {points}</p>
      <button
        className="button"
        onClick={() => alert("Going to Points Store!")}
      >
        Go to Points Store
      </button>
      <button className="button" onClick={() => alert("Going to Inventory!")}>
        Go to Inventory
      </button>
    </div>
  );
}

export default UserPoints;
