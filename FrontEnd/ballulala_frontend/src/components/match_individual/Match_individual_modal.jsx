import React, { useState } from "react";
import axios from "axios";
import "./Match_individual_modal.css";

function MatchModal({ isOpen, onClose, onSubmit }) {
  const [matchDate, setMatchDate] = useState("");
  const [time, setTime] = useState(0);
  const [stadium, setStadium] = useState(0);

  const handleSubmit = async () => {
    const data = {
      matchDate,
      time,
      stadium,
    };

    try {
      const response = await axios.post(
        "https://i9d110.p.ssafy.io:8081/personalMatch/add",
        data
      );

      if (response.data.message === "success") {
        console.log("Data successfully posted");
        if (onSubmit) {
          onSubmit(data); // 상위 컴포넌트로 데이터 전송
        }
      } else {
        console.error("Unexpected response data:", response.data);
      }
    } catch (error) {
      console.error("Failed to post data:", error);
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>매치 정보 입력</h2>

        <label>
          매치 날짜:
          <input
            type="date"
            value={matchDate}
            onChange={(e) => setMatchDate(e.target.value)}
          />
        </label>

        <label>
          시간:
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
          />
        </label>

        <label>
          구장:
          <input
            type="number"
            value={stadium}
            onChange={(e) => setStadium(Number(e.target.value))}
          />
        </label>

        <div className="modal-buttons">
          <button onClick={onClose}>취소</button>
          <button onClick={handleSubmit}>제출</button>
        </div>
      </div>
    </div>
  );
}

export default MatchModal;
