import React, { useEffect, useState } from "react";
import axios from "axios";
import { tokenState } from "../../../src/atoms";
import { useRecoilValue } from "recoil";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

function TeamMatchCarousel() {
  const [teams, setTeams] = useState([]);
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const [carouselData, setCarouselData] = useState([]);
  const token = useRecoilValue(tokenState);

  useEffect(() => {
    axios
      .get("https://i9d110.p.ssafy.io:8081/teams/myTeam", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.state === "SUCCESS") {
          setTeams(response.data.teamList);
        }
      })
      .catch((error) => {
        console.error("API 호출 중 에러 발생:", error);
      });
  }, [token]);

  useEffect(() => {
    if (selectedTeamId) {
      axios
        .get(
          `https://i9d110.p.ssafy.io:8081/teams/carousel/${selectedTeamId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          if (response.data.message === "success") {
            setCarouselData(response.data.carousel);
          }
        })
        .catch((error) => {
          console.error("API 호출 중 에러 발생:", error);
        });
    }
  }, [selectedTeamId, token]);

  return (
    <div>
      <select
        value={selectedTeamId || ""}
        onChange={(e) => setSelectedTeamId(e.target.value)}
      >
        <option value="" disabled>
          Select your team
        </option>
        {teams.map((team) => (
          <option key={team.teamId} value={team.teamId}>
            {team.name}
          </option>
        ))}
      </select>
      <Swiper spaceBetween={50} slidesPerView={1}>
        {carouselData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="slide-content">
              <img src={`/images/${data.logo}.png`} alt={`${data.name} logo`} />
              <h3>{data.name}</h3>
              <p>MMR: {data.mmr}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .slide-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .slide-content img {
          width: 80px;
          height: 80px;
          margin-bottom: 10px;
        }

        .slide-content h3 {
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
}

export default TeamMatchCarousel;
