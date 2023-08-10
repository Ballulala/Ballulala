import React from "react";
import "./Teammatch_list.css";

<<<<<<< HEAD
function MatchList() {
  const matches = [
    {
      id: 1,
      stadium: "서울 영등포 더에프 필드 A구장",
      time: "09:00",
      teams: [
        { logoUrl: "logo1.png", name: "Team 1" },
        { logoUrl: "logo2.png", name: "Team 2" },
        { logoUrl: "logo3.png", name: "Team 3" },
      ],
    },
    
  ];

=======
function MatchList({ matches }) {
  if (!matches) {
    return <div>매칭 데이터가 없습니다.</div>;
  }
  console.log("matches:", matches);
>>>>>>> 705e3c4419237649f754b7b30ae14684d58a66c3
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
