import React, { useEffect, useState } from "react";
import TopNavbar from "../top_navbar/TopNavbar";
// import axios from "axios";
import Carousel from "./Team_Carousel";
import { dummyData } from "./dummyData";
import DateBar from "../date_bar/Date_Bar.jsx";

function Team_Matching() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(dummyData);
  }, []);

  return (
    <div>
      <TopNavbar />
      <h1>Matching</h1>
      <Carousel teams={teams} />
      <DateBar />
    </div>
  );
}

export default Team_Matching;
