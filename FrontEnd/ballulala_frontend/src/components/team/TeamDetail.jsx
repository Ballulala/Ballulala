import React, { useState, useEffect } from "react";
import "./TeamDetail.css";
import TopNavbar from '../top_navbar/TopNavbar';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { tokenState } from "../../atoms/token";
import { useRecoilValue } from "recoil";
import TeamModal from "./TeamModal";
import { getRegionName } from "../function/getRegionName";


function TeamDetail() {
  const token = useRecoilValue(tokenState);


  // const { teamName } = useParams();
  const { teamId } = useParams();

  async function getTeamDataFromServer() {
    try {
      const response = await axios.post(
        "https://i9d110.p.ssafy.io:8081/teams/detail",
        { id: teamId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setTeam({ teamDetail: response.data.teamDetail, userState: response.data.userState });
    } catch (error) {
      console.log("팀 데이터를 가져오는데 실패했습니다:", error);
      console.log(teamId);
      setTeam({});
    }
  }
  
  
  const [team, setTeam] = useState({ teamDetail: {} });
  // const [team, setTeam] = useState({});

  // useEffect(() => {
  //   const fetchTeamData = async () => {
  //     const teamData = await getTeamDataFromServer(teamName);
  //     setTeam(teamData);
  //   };
  
  //   fetchTeamData();
  // }, [teamName]);

  useEffect(() => {
    const fetchTeamData = async () => {
      await getTeamDataFromServer(teamId);
    };
  
    fetchTeamData();
  }, [teamId]);
  

  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);

  const openJoinModal = () => {
    setShowJoinModal(true);
  };

  const closeJoinModal = () => {
    setShowJoinModal(false);
  };

  const openLeaveModal = () => {
    setShowLeaveModal(true);
  };

  const closeLeaveModal = () => {
    setShowLeaveModal(false);
  };

  async function joinTeam() {
    try {
      const response = await axios.post(
        "https://i9d110.p.ssafy.io:8081/teamUser/join",
        {
          team: teamId,
          state: 2,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      closeJoinModal();
    } catch (error) {
      console.log("팀 가입 신청에 실패했습니다:", error);
    }
  }

  const handleJoinSubmit = async () => {
    await joinTeam();
  };

  async function leaveTeam() {
    try {
      const response = await axios.get(`https://i9d110.p.ssafy.io:8081/teamUser/memberOut/${teamId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      closeLeaveModal();
    } catch (error) {
      console.log("팀 탈퇴 신청에 실패했습니다:", error);
    }
  }
  
  const handleLeaveSubmit = async () => {
    await leaveTeam();
    window.location.reload();
  };
  


  // 필요한 변수와 함수 선언
  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <div>
      <TopNavbar />
      <div className="team-detail-page">
        <div className="team-detail">
          {/* <img
    className="team-logo-img"
    src={team.teamDetail.logo}
    alt={`${team.teamDetail.name} 로고`}
    style={{ width: '40%' }}
  /> */}

<img
    className="team-logo-img"
    src={`/images/${team.teamDetail.logo}.png`} alt='empty'
    style={{ width: '40%' }}
  />

          <div className="team-name">{team.teamDetail.name}</div>
          <br />

          {/* <div className="team-detail-more">
            <img src={"/icon_member.png"} alt="img" />
            <div>{team.member_count}</div>
              <button className="team-more-btn">more</button>
            </div> */}

          <div className="team-detail-more">
            <img src={"/icon_location.png"} alt="img" />
            <div>{getRegionName(team.teamDetail.gugun)}</div>

          </div>

          <div className="team-detail-more">
            <img src={"/icon_soccer.png"} alt="img" />
            <div>
              {team.teamDetail.winCount}승 {team.teamDetail.loseCount}패 
              ({(team.teamDetail.winCount / (team.teamDetail.winCount + team.teamDetail.loseCount) * 100).toFixed(2)}%)
            </div>
            {/* <button className="team-more-btn">more</button> */}
          </div>

          <div className="team-detail-more">
            <img src={"/images/mmr.jpg"} alt="img" />
            <div>{team.teamDetail.mmr}</div>
            {/* <button className="team-more-btn">gave</button> */}
          </div>

          <br />
          <br />


          {
  team.userState === "일반회원" && (
    <button className="team-join-btn" type="submit" onClick={openLeaveModal}>
      탈퇴 신청
    </button>
  )
}

{
  team.userState === "관리자" && (
    <Link to={`/teamsetting/${teamId}`}>
      <button className="team-join-btn" type="submit">
        팀 관리하기
      </button>
    </Link>
  )
}

{
  team.userState === "미가입자" && (
    <button className="team-join-btn" type="submit" onClick={openJoinModal}>
      가입 신청
    </button>
  )
}

        </div>

        <div className="team-more">
          <div>{team.teamDetail.description}</div>
          {/* <Link to={`/teamsetting/${teamId}`}>팀 관리 페이지로</Link> */}
        </div>
      </div>

      <TeamModal
        title="가입 신청"
        isOpen={showJoinModal}
        onClose={closeJoinModal}
        onSubmit={handleJoinSubmit}
      >
        <div>가입 신청 하시겠습니까?</div>
      </TeamModal>

      <TeamModal
        title="탈퇴 신청"
        isOpen={showLeaveModal}
        onClose={closeLeaveModal}
        onSubmit={handleLeaveSubmit}
      >
        <div>탈퇴 하시겠습니까?</div>
      </TeamModal>

    </div>
  );
}

export default TeamDetail;
