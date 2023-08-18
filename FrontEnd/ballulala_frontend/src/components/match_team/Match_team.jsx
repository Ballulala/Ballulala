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

  const coverImagePath = process.env.PUBLIC_URL + "/images/img_stadium_2.jpg";
  const fetchMatchesByDate = async (selectedDate) => {
    const formattedDate = selectedDate.toISOString().split("T")[0];
    try {
      const response = await fetch(
        `https://i9d110.p.ssafy.io:8081/matches/listLess?matchDate=${formattedDate}`
      );
      const data = await response.json();
      if (data.message === "success") {
        setRegisteredMatches(data.matchList);
      }
    } catch (error) {
      console.error("Error fetching matches:", error);
    }
  };

  useEffect(() => {
    setTeams(dummyData);
  }, []);

  const handleMatchRegistration = (match) => {
    setRegisteredMatches((prev) => [...prev, match]);
  };

  return (
    <div className="team-page">
      <TopNavbar />
      <div
        className="image-container sliding-image"
        style={{ backgroundImage: `url(${coverImagePath})` }}
      >
        <div className="rank-text">Match (team)</div>
      </div>
      <Carousel teams={teams} />
      <div className="center-container">
        <TeamMatchingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onRegister={handleMatchRegistration}
        />
      </div>
      <DateBar onDateSelect={fetchMatchesByDate} />
      <MatchList matches={registeredMatches} />
    </div>
  );
}

export default TeamMatching;
