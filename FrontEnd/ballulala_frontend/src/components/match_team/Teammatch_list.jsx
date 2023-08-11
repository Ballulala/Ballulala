import React from "react";
import "./Teammatch_list.css";

function MatchList({ matches }) {
  if (!matches) {
    return <div>매칭 데이터가 없습니다.</div>;
  }

  const handleApply = (match) => {
   
  };

  return (
    <div className="match-list">
      {matches.map((match, index) => (
        <div key={index} className="match-list-item">
          <h3>{match.stadium}</h3>
          <h2>
            {match.teamName[0]} vs {match.teamName[1] || "대기 중"} vs {match.teamName[2] || "대기 중"}
          </h2>
          <p>{match.time}</p>
          {match.teamName.length < 3 && <button onClick={() => handleApply(match)}>신청가능</button>}
        </div>
      ))}
    </div>
  );
}
export default MatchList;
