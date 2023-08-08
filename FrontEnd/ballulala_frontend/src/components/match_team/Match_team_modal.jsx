import React, { useState } from "react";
import "./Match_team_modal.css";

function TeamMatchingModal({ onMatchAdded }) {
  const [showModal, setShowModal] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [stadium, setStadium] = useState("");
  const [startTime, setStartTime] = useState("");
  const [matchDate, setMatchDate] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      matchDate: matchDate,
      team: teamName,
      time: startTime,
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
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully");
        onMatchAdded(formData);
      } else {
        console.error("Server responded with an error");
      }
    } catch (error) {
      console.error("There was an error submitting the form", error);
    }

    setTeamName("");
    setStadium("");
    setStartTime("");
    setMatchDate("");
    closeModal();
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

            <form onSubmit={handleSubmit}>
              <label>
                날짜:
                <input
                  type="date"
                  value={matchDate}
                  onChange={(e) => setMatchDate(e.target.value)}
                />
              </label>
              <br />
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
              <div className="modal-btns">
                <button
                  className="modal-no-btn"
                  type="button"
                  onClick={closeModal}
                >
                  취소
                </button>

                <button className="modal-yes-btn" type="submit">
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
