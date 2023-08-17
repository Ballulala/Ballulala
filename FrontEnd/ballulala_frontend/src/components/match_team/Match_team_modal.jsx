import React, { useState, useEffect } from "react";
import "./Match_team_modal.css";
import { tokenState } from "../../../src/atoms";
import { useRecoilValue } from "recoil";
import Swal from "sweetalert2";

function TeamMatchingModal({ isOpen, onClose, onRegister }) {
  const [matchDate, setMatchDate] = useState("");
  const [team, setTeam] = useState("");
  const [startTime, setStartTime] = useState("");
  const [stadium, setStadium] = useState("");
  const [userTeams, setUserTeams] = useState([]);
  const [showModal, setShowModal] = useState(isOpen);
  const token = useRecoilValue(tokenState);

  useEffect(() => {
    const fetchUserTeams = async () => {
      if (!token) {
        console.log("Token is not available yet.");
        return;
      }

      console.log("Token being used for the request:", token);

      try {
        const response = await fetch(
          "https://i9d110.p.ssafy.io:8081/teams/myTeam",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        if (data && data.teamList) {
          setUserTeams(data.teamList);
        }
      } catch (error) {
        console.error("Error fetching user teams:", error);
      }
    };

    fetchUserTeams();
  }, [token]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    onClose();
  };

  const handleSubmit = async () => {
    const dateObj = new Date(matchDate);
    dateObj.setDate(dateObj.getDate());
    const adjustedDate = dateObj.toISOString().split("T")[0];
    const requestBody = {
      matchDate: adjustedDate,
      team: team,
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
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(requestBody),
        }
      );
      const result = await response.json();

      if (response.ok && result.message === "success") {
        Swal.fire({
          title: "성공!",
          text: "매치가 등록되었습니다.",
          icon: "success",
          confirmButtonText: "확인",
        });
      } else {
        Swal.fire({
          title: "오류!",
          text: "매치 등록에 실패했습니다.",
          icon: "error",
          confirmButtonText: "확인",
        });
        console.error("Failed to register the match", await response.text());
      }
    } catch (error) {
      console.error("Error submitting the match:", error);
    }

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
                  console.log(e.target.value);
                  {userTeams.map((userTeam) => (
                    <option key={userTeam.teamId} value={userTeam.name}>
                      {userTeam.name}
                    </option>
                  ))}
                </select>
              </label>

              <br />
              <label>
                팀 이름 (텍스트 필드):
                <input
                  type="text"
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                  readOnly
                />
              </label>

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
