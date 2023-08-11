import React from "react";
import "./TeamInfo.css";

function TeamInfo({ teamLogo, teamName }) {
  return (
    <div className="team-info1">
      <p>Team logo</p>
      <img src={teamLogo} alt="Team logo" />
      <p>Team: {teamName}</p>
    </div>
  );
}

export default TeamInfo;
