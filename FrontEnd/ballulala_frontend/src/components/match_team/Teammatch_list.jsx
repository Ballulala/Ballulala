import React from "react";
import "./Teammatch_list.css";

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

  return (
    <div className="match-list">
      {matches.map((match) => (
        <div key={match.id} className="match-list-item">
          <div className="match-list-title">
            <h3>{match.stadium}</h3>
          </div>
          <div className="match-schedule-time">
            <p>{match.time}</p>
          </div>
          <div className="match-teams">
            {match.teams.map((team, index) => (
              <React.Fragment key={index}>
                <div className="team">
                  <img src={team.logoUrl} alt={team.name} />
                </div>
                {index < match.teams.length - 1 && <div className="vs">VS</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MatchList;
