import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserPoints.css";

function UserPoints({ points }) {
  const navigate = useNavigate();

  return (
    <div className="user-points">
      <p>Points: {points}</p>
      <button className="button" onClick={() => navigate("/pointshop")}>
        Go to Points Store
      </button>
      <button className="button" onClick={() => alert("Going to Inventory!")}>
        Go to Inventory
      </button>
    </div>
  );
}

export default UserPoints;
