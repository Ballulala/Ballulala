import React from "react";
import "./TeamInfo.css";
import { Link } from "react-router-dom";

function TeamInfo({ teamLogo, teams, selectedTeam, onSelectTeam }) {
  return (
    <div className="team-info1">
      <p>Team logo</p>
      <Link to={selectedTeam ? `/teamdetail/${selectedTeam.teamId}` : "#"}>
        <img
          src={
            selectedTeam
              ? `./images/${selectedTeam.logo}.png`
              : `./images/A.png`
          }
          alt="없음"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/chealsea.png";
          }}
        />
      </Link>
      Team:
      <select
        value={selectedTeam ? selectedTeam.teamId : ""}
        onChange={(e) => {
          const teamId = parseInt(e.target.value, 10);
          const team = teams.find((t) => t.teamId === teamId);
          onSelectTeam(team);
        }}
      >
        {teams.map((team) => (
          <option key={team.teamId} value={team.teamId}>
            {team.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TeamInfo;
