import React from "react";
import "./UserStats.css";

function UserStats({ mvpCount, mannerScore }) {
  return (
    <div className="user-stats">
      <p>MVP Count: {mvpCount}</p>
      <p>Manner Score: {mannerScore}</p>
    </div>
  );
}

export default UserStats;
