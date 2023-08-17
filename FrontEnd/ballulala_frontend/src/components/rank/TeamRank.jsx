import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TeamRank.css";
import TopNavbar from "../top_navbar/TopNavbar";
import useRegionFilter from '../hooks/useRegionFilter';

function TeamRank() {
  const [team, setTeam] = useState("");
  const [showRegions, setShowRegions] = useState(false);
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);

  const coverImagePath = process.env.PUBLIC_URL + "/images/img_stadium_8.jpg";
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(
          "https://i9d110.p.ssafy.io:8081/teams/listMmr"
        );
        const data = await response.json();
        const sortedTeams = data.matchList.sort((a, b) => b.mmr - a.mmr);
        setTeams(sortedTeams);
        setFilteredTeams(sortedTeams);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams();
  }, []);

  const { filterByGugun, clearFilter } = useRegionFilter(teams, filteredTeams, setFilteredTeams);

  return (
    <div className="team-page">
      <TopNavbar />

      <div
        className="image-container sliding-image"
        style={{ backgroundImage: `url(${coverImagePath})` }}
      >
        <div className="rank-text">RANK (team)</div>
      </div>

      <div className="search-team">
        <div className="buttons">
          <Link to="/teamrank">
            <button className="radius-btn-selected">팀 순위</button>
          </Link>

          <Link to="/userrank">
            <button className="radius-btn">개인 순위</button>
          </Link>
        </div>

        <div className="team-search-box">
          <label htmlFor="email"></label>
          <input
            type="team"
            id="team"
            placeholder="팀 이름 검색"
            value={team}
            onChange={(event) => setTeam(event.target.value)}
          />
        </div>
      </div>

      <div className="rank-second-line">
        <div className="buttons">
          <div className="region-container">
            <button
              className="rank-button"
              onClick={() => setShowRegions(!showRegions)}
            >
              지역별　▼
            </button>
            {showRegions && (
              <div className="region-list">
                <button onClick={() => clearFilter()}>전체 지역</button>
                <button onClick={() => filterByGugun(0)}>서울</button>
                <button onClick={() => filterByGugun(1)}>경기</button>
                <button onClick={() => filterByGugun(2)}>인천</button>
                <button onClick={() => filterByGugun(3)}>강원</button>
                  <button onClick={() => filterByGugun(4)}>대구</button>
                  <button onClick={() => filterByGugun(5)}>대전</button>
                  <button onClick={() => filterByGugun(6)}>경남</button>
                  <button onClick={() => filterByGugun(7)}>경북</button>
                  <button onClick={() => filterByGugun(8)}>부산</button>
                  <button onClick={() => filterByGugun(9)}>울산</button>
                  <button onClick={() => filterByGugun(10)}>광주</button>
                  <button onClick={() => filterByGugun(11)}>제주</button>
                  <button onClick={() => filterByGugun(12)}>전남</button>
                  <button onClick={() => filterByGugun(13)}>전북</button>
                  <button onClick={() => filterByGugun(14)}>충남</button>
                  <button onClick={() => filterByGugun(15)}>충북</button>
                {/* 추가로 지역 버튼을 넣고 싶으시면 여기에 추가하시면 됩니다. */}
              </div>
            )}
          </div>
        </div>

        <div className="rank-info">
          <div>MMR</div>
        </div>
      </div>

      {/* 여기에 전체 팀 리스트를 추가하세요. */}
      <div className="list">
        <hr />
        <div>
          <ul>
            {/* {teams.map((team, index) => ( */}
            {filteredTeams.map((team, index) => (
              <li key={team.id}>
                <div className="team-rank-one">
                  <span>{index + 1}</span>
                  <Link to={`/teamdetail/${team.id}`}>
                    <img
                      src={`/images/${team.logo}.png`}
                      alt={team.name + " 로고"}
                      className="rank-logo"
                    />
                  </Link>
                  <Link to={`/teamdetail/${team.id}`}>{team.name}</Link>
                </div>
                <div className="team-rank-two">
                  <div>{team.mmr}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamRank;
