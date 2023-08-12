import React, { useState } from "react"; 
import "./Match_team_modal.css";
import { tokenState } from "../../../src/atoms";
import { useRecoilValue } from 'recoil';
import axios from 'axios';

function TeamMatchingModal({ isOpen, onClose, onRegister }) {
  const [matchDate, setMatchDate] = useState("");
  const [team, setTeam] = useState("");
  const [startTime, setStartTime] = useState("");
  const [stadium, setStadium] = useState("");
  const [showModal, setShowModal] = useState(isOpen);
  const token = useRecoilValue(tokenState);

  const handleSubmit = async () => {
    const requestBody = {
      matchDate: matchDate,
      team: team,
      time: parseInt(startTime),
      stadium: stadium,
    };

    try {
      const response = await axios.post("https://i9d110.p.ssafy.io/matches/add", requestBody, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.data && response.data.message === "success") {
        // 성공적으로 POST 요청이 처리된 경우
        onClose();
      } else {
        // 서버에서 예상치 못한 응답이 왔을 때
        console.error("Error submitting the form:", response.data);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }

    setMatchDate("");
    setTeam("");
    setStartTime("");
    setStadium("");
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>팀 매칭 등록</button>
      {showModal && (
        <div className="ball-modal">
          <div className="ball-modal-content">
            <div className="ball-modal-title">
              <h2>팀 매칭 등록</h2>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
              <label>
                매치 날짜:
                <input
                  type="date"
                  value={matchDate}
                  onChange={(e) => setMatchDate(e.target.value)}
                />
              </label>
              <br />

              <label>
                팀 선택:
                <input
                  type="text"
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                />
              </label>
              <br />

              <label>
                시작 시간:
                <input
                  type="number"
                  min="0"
                  max="24"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </label>
              <br />

              <label>
                구장:
                <input
                  type="text"
                  value={stadium}
                  onChange={(e) => setStadium(e.target.value)}
                />
              </label>
              <br />
              <br />

              <div className="modal-btns">
                <button
                  className="modal-no-btn"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  취소
                </button>

                <button
                  className="modal-yes-btn"
                  type="submit"
                >
                  확인
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamMatchingModal;
