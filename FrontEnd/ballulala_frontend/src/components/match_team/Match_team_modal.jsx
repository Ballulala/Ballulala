import React, { useState } from "react";
import "./Match_team_modal.css";

function TeamMatchingModal() {
  const [showModal, setShowModal] = useState(false);

  // 상태 추가
  const [teamName, setTeamName] = useState("");
  const [stadium, setStadium] = useState("");
  const [startTime, setStartTime] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    console.log("Form submitted");
    // 폼 제출 처리 로직 추가
    setTeamName("");
    setStadium("");
    setStartTime("");
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
                구장:
                <input
                  type="text"
                  value={stadium}
                  onChange={(e) => setStadium(e.target.value)}
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
