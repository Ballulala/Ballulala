import React, { useState } from "react";
import TopNavbar from "../top_navbar/TopNavbar";
import Carousel from "./Team_Carousel";
import DateBar from "../date_bar/Date_Bar.jsx";
import TeamMatchingModal from "./Match_team_modal";
import MatchList from "./Teammatch_list";
import "./Match_team.css";

function Team_Matching() {
  const [teams, setTeams] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [matches, setMatches] = useState([
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
    // ... 초기 matches 데이터
  ]);

  const addMatch = (teamName, time, stadium) => {
    setMatches((prevMatches) => [
      ...prevMatches,
      {
        id: prevMatches.length + 1,
        stadium: stadium,
        time: time,
        teams: [{ logoUrl: "logo1.png", name: teamName }],
      },
    ]);
  };

  return (
    <div>
      <TopNavbar />
      <div className="center-container">
        <h1>Matching</h1>
      </div>
      <Carousel teams={teams} />
      <div className="center-container">
        <TeamMatchingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onMatchAdded={addMatch}
        />
      </div>
      <DateBar />
      <MatchList matches={matches} />
    </div>
  );
}

export default Team_Matching;
