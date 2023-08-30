import React, { useState, useEffect } from "react";
import { tokenState } from "../../../src/atoms";
import { useRecoilValue } from "recoil";
import Swal from "sweetalert2";
import "./Match_team_modal.css";

function ApplyMatchModal({ isOpen, onClose, match }) {
  const [matchDate, setMatchDate] = useState("");
  const [team, setTeam] = useState("");
  const [startTime, setStartTime] = useState(match ? match.time : "");
  const [stadium, setStadium] = useState(match ? match.stadium.name : "");
  const [userTeams, setUserTeams] = useState([]);
  const token = useRecoilValue(tokenState);

  useEffect(() => {
    const fetchUserTeams = async () => {
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

  const handleSubmit = async () => {
    const dateObj = new Date(matchDate);
    dateObj.setDate(dateObj.getDate());
    const adjustedDate = dateObj.toISOString().split("T")[0];
    dateObj.setDate(dateObj.getDate() - 1);
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
        onClose();
      } else {
        Swal.fire({
          title: "오류!",
          text: "매치 등록에 실패했습니다.",
          icon: "error",
          confirmButtonText: "확인",
        });
      }
    } catch (error) {
      console.error("Error submitting the match:", error);
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="ball-modal">
          <div className="ball-modal-content">
            <h2>매치 신청</h2>
            <label>
              매치 날짜:
              <input
                type="date"
                value={matchDate}
                onChange={(e) => setMatchDate(e.target.value)}
              />
            </label>
            <label>
              팀 선택:
              <select value={team} onChange={(e) => setTeam(e.target.value)}>
                {userTeams.map((userTeam) => (
                  <option key={userTeam.teamId} value={userTeam.name}>
                    {userTeam.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              시작 시간:
              <input
                type="number"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </label>
            <label>
              구장:
              <input
                type="text"
                value={stadium}
                onChange={(e) => setStadium(e.target.value)}
              />
            </label>
            <button onClick={handleSubmit}>신청하기</button>
            <button onClick={onClose}>취소</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplyMatchModal;
