import React, { useState } from "react";
import ApplyMatchModal from "../match_team/Match_shinchung";
import "./HomeMatchlist.css";
import ResultInput from "./ResultInput";

function HomeMatchList({ matches }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const handleApplyClick = (match) => {
    setSelectedMatch(match);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMatch(null);
  };

  if (!matches || matches.length === 0) {
    return <p>매치 정보가 없습니다.</p>;
  }

  const formatTime = (time) => {
    return `${String(time).padStart(2, "0")}:00`;
  };

  return (
    <div className="match-list-container">
      {matches.map((match) => (
        <div key={match.id} className="match-item">
          <div className="stadium-name">{match.stadium.name}</div>
          <div className="teams">
            {match.team1 ? (
              match.team1.name
            ) : (
              <button onClick={() => handleApplyClick(match)}>신청 가능</button>
            )}{" "}
            vs
            {match.team2 ? (
              match.team2.name
            ) : (
              <button onClick={() => handleApplyClick(match)}>신청 가능</button>
            )}{" "}
            vs
            {match.team3 ? (
              match.team3.name
            ) : (
              <button onClick={() => handleApplyClick(match)}>신청 가능</button>
            )}
            <ResultInput match={match} />
          </div>
          <div className="match-time">{formatTime(match.time)}</div>
        </div>
      ))}
      {selectedMatch && (
        <ApplyMatchModal
          isOpen={isModalOpen}
          onClose={closeModal}
          matchDate={selectedMatch.matchDate}
          startTime={selectedMatch.time}
          stadium={selectedMatch.stadium.name}
        />
      )}
    </div>
  );
}

export default HomeMatchList;
