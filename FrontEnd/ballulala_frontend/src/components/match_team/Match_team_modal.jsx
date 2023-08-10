import React, { useState } from "react";
import "./Match_team_modal.css";

<<<<<<< HEAD
function TeamMatchingModal() {
  const [showModal, setShowModal] = useState(false);

  // 상태 추가
  const [teamName, setTeamName] = useState("");
  const [stadium, setStadium] = useState("");
  const [startTime, setStartTime] = useState("");
=======
function TeamMatchingModal({ isOpen, onClose, onRegister }) {
  const [showModal, setShowModal] = useState(false);
  const [matchDate, setMatchDate] = useState("");
  const [teamName, setTeamName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [stadium, setStadium] = useState("");
>>>>>>> 705e3c4419237649f754b7b30ae14684d58a66c3

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

<<<<<<< HEAD
  const handleSubmit = () => {
    console.log("Form submitted");
    // 폼 제출 처리 로직 추가
    setTeamName("");
    setStadium("");
    setStartTime("");
=======
  const handleSubmit = async () => {
    const requestBody = {
      matchDate: matchDate,
      team: teamName,
      time: parseInt(startTime),
      stadium: stadium,
    };

    try {
      const response = await fetch(
        "https://i9d110.p.ssafy.io:8081/matches/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const responseData = await response.json();

      if (responseData.message === "success") {
        console.log("매칭이 성공적으로 등록되었습니다.");

        onRegister(requestBody);
      } else {
        console.error("매칭 등록에 실패하였습니다.");
      }
    } catch (error) {
      console.error("서버에 요청을 보내는 중 오류가 발생했습니다.", error);
    }

    setMatchDate("");
    setTeamName("");
    setStartTime("");
    setStadium("");
>>>>>>> 705e3c4419237649f754b7b30ae14684d58a66c3
  };

  return (
    <div>
      <button onClick={openModal}>팀 매칭 등록</button>

      {showModal && (
        <div className="ball-modal">
          <div className="ball-modal-content">
            <div className="ball-modal-title">
              <h2>팀 매칭 등록</h2>
            </div>

            <form>
<<<<<<< HEAD
=======
              <label>
                날짜:
                <input
                  type="date"
                  value={matchDate}
                  onChange={(e) => setMatchDate(e.target.value)}
                />
              </label>
              <br />
>>>>>>> 705e3c4419237649f754b7b30ae14684d58a66c3
              <label>
                팀 이름:
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
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
            </form>

            <div className="modal-btns">
              <button
                className="modal-no-btn"
                type="button"
                onClick={closeModal}
              >
                취소
              </button>

              <button
                className="modal-yes-btn"
                type="button"
                onClick={() => {
                  handleSubmit();
                  closeModal();
                }}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamMatchingModal;
