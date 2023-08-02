import React, { useEffect, useState } from "react";
import TopNavbar from "../home/TopNavbar";
import axios from "axios";
import Carousel from "./Team_Carousel";

function Team_Matching() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("http://your-api-url.com/teams")
      .then((response) => {
        setTeams(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div>
      <TopNavbar />
      <h1>Matching</h1>
      <Carousel teams={teams} />
    </div>
  );
}

export default Team_Matching;
