import React, { useState, useEffect } from "react"; 
import "./Match_team_modal.css";

function TeamMatchingModal({ isOpen, onClose, onRegister }) {
  const [matchDate, setMatchDate] = useState("");
  const [team, setTeam] = useState("");
  const [startTime, setStartTime] = useState("");
  const [stadium, setStadium] = useState("");
  const [userTeams, setUserTeams] = useState([]);
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
 
    const fetchUserTeams = async () => {
      try {
        const response = await fetch("https://i9d110.p.ssafy.io/matches/teamList?id=1");
        const data = await response.json();
        setUserTeams(data);
      } catch (error) {
        console.error("Error fetching user teams:", error);
      }
    };
    
    fetchUserTeams();
  }, []);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    onClose();  
  };

  const handleSubmit = async () => {
    const requestBody = {
      matchDate: matchDate,
      team: parseInt(team),
      time: parseInt(startTime),
      stadium: stadium,
    };

  

    setMatchDate("");
    setTeam("");
    setStartTime("");
    setStadium("");
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
                <select value={team} onChange={(e) => setTeam(e.target.value)}>
                  {userTeams.map((userTeam) => (
                    <option key={userTeam.id} value={userTeam.id}>
                      {userTeam.name}
                    </option>
                  ))}
                </select>
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
