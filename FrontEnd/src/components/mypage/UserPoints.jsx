import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserPoints.css";

function UserPoints({ points }) {
  const navigate = useNavigate();

  return (
    <div className="user-points">
      <p>Points: {points}</p>
      <button className="button" onClick={() => navigate("/pointshop")}>
        포인트 상점 가기
      </button>
      <button className="button" onClick={() => navigate("/inventory")}>
        인벤토리 가기
      </button>
    </div>
  );
}

export default UserPoints;
