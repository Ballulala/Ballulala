import React, { useEffect, useState } from "react";
import TopNavbar from "../top_navbar/TopNavbar";
import Carousel from "./Team_Carousel";
import { dummyData } from "./dummyData";
import DateBar from "../date_bar/Date_Bar.jsx";
import TeamMatchingModal from "./Match_team_modal";
import MatchList from "./Teammatch_list";
import "./Match_team.css";

function Team_Matching() {
  const [teams, setTeams] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTeams(dummyData);
  }, []);

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
        />
      </div>
      <DateBar />
      <MatchList />
    </div>
  );
}

export default Team_Matching;
