import React, { useEffect, useState } from "react";
import TopNavbar from "../top_navbar/TopNavbar";
import Carousel from "./Team_Carousel";
import { dummyData } from "./dummyData";
import DateBar from "../date_bar/Date_Bar.jsx";
import TeamMatchingModal from "./Match_team_modal";
import MatchList from "./Teammatch_list";
import "./Match_team.css";

function TeamMatching() {
  const [teams, setTeams] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registeredMatches, setRegisteredMatches] = useState([]);

  useEffect(() => {
    setTeams(dummyData);
  }, []);

  const handleMatchRegistration = (match) => {
    setRegisteredMatches((prev) => [...prev, match]);
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
          onRegister={handleMatchRegistration}
        />
      </div>
      <DateBar />
      <MatchList matches={registeredMatches} />
    </div>
  );
}

export default TeamMatching;
