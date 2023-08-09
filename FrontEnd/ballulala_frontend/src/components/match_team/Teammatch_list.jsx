import React from "react";
import "./Teammatch_list.css";

function MatchList({ matches }) {
  if (!matches) {
    return <div>매칭 데이터가 없습니다.</div>;
  }
  console.log("matches:", matches);
  return (
    <div className="match-list">
      {matches.map((match, index) => (
        <div key={index} className="match-list-item">
          <h3>{match.stadium}</h3>
          <h2>{match.teamName}</h2>
          <p>{match.time}</p>
        </div>
      ))}
    </div>
  );
}

export default MatchList;
