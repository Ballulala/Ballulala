import React, { useState, useEffect } from "react";
import "./TeamDetail.css";
import TopNavbar from '../top_navbar/TopNavbar';
import { Link, useParams } from 'react-router-dom';
import { teamDetailData } from './TeamDummyData';

function TeamDetail() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phonenum, setPhonenum] = useState('');
  const [position, setPosition] = useState('');
  const [skill, setSkill] = useState('');

      // 백 구현 이후
  // useParams 훅을 사용해서 URL로부터 teamId를 가져옵니다.
   const { teamId } = useParams();

  //   // useEffect를 사용하여 컴포넌트 마운트 시 팀 정보를 가져와 상태 업데이트를 진행합니다.
  //   useEffect(() => {
  //     // 이 부분에서 팀 정보를 가져오는 로직을 작성합니다.
  //     // 서버로부터 정보를 가져와, setTeamInfo 함수를 사용하여 저장할 수 있습니다.
  //     const fetchTeamData = async () => {
  //       const teamData = await getTeamDataFromServer(teamId); // getTeamDataFromServer 함수를 작성해서 사용하십시오.
  //       // teamData를 사용해 원하는 상태를 설정하십시오.
  
  //       // 예시:
  //       // setName(teamData.name);
  //       // ...
  //     };
  
  //     fetchTeamData();
  //   }, [teamId]); 
  

  const getTeamDataFromServer = (teamId) => {
    return new Promise((resolve) => {
      const teamData = teamDetailData.find((team) => team.team_id === teamId);
      resolve(teamData);
    });
  };  
   

  const [team, setTeam] = useState({});

  useEffect(() => {
    const fetchTeamData = async () => {
      const teamData = await getTeamDataFromServer(teamId);
      setTeam(teamData);
    };
  
    fetchTeamData();
  }, [teamId]);
  


  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
          <img className="team-logo-img" src={team.logo} alt={`${team.name} 로고`} />
          <div className="team-name">{team.name}</div>
          <br />

          <div className="team-detail-more">
            <img src={"/icon_member.png"} alt="img" />
            <div>{team.member_count}</div>
              <button className="team-more-btn">more</button>
            </div>

          <div className="team-detail-more">
            <img src={"/icon_location.png"} alt="img" />
            <div>{team.sido} {team.gugun}</div>
          </div>

          <div className="team-detail-more">
            <img src={"/icon_soccer.png"} alt="img" />
            <div>
              {team.win_count}승 {team.lose_count}패 
              ({(team.win_count / (team.win_count + team.lose_count) * 100).toFixed(2)}%)
            </div>
            <button className="team-more-btn">more</button>
          </div>

          <div className="team-detail-more">
            <img src={"/images/point_black.png"} alt="img" />
            <div>{team.point}</div>
            <button className="team-more-btn">gave</button>
          </div>

          <br />
          <br />
          <button className="team-join-btn" type="submit" onClick={openModal}>
            가입신청/탈퇴 신청
          </button>

        </div>

        <div className="team-more">
          <div>{team.description}</div>
          <Link to={`/teamsetting/${teamId}`}>팀 관리 페이지로</Link>
        </div>
      </div>

      {showModal && (
        <div className="ball-modal">
          <div className="team-join-modal-content ball-modal-content">
            <div className="ball-modal-title">
              <div>가입 신청</div>
            </div>

            
            <div className="inputbox">
                <br />
                <label htmlFor="name"></label>
                <input
                  type="text"
                  id="name"
                  placeholder="이름"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="inputbox">
                <br />
                <label htmlFor="age"></label>
                <input
                  type="text"
                  id="age"
                  placeholder="나이"
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                />
              </div>

              <div className="inputbox">
                <br />
                <label htmlFor="phonenum"></label>
                <input
                  type="text"
                  id="phonenum"
                  placeholder="휴대폰번호"
                  value={phonenum}
                  onChange={(event) => setPhonenum(event.target.value)}
                />
              </div>

              <div className="inputbox">
                <br />
                <label htmlFor="position"></label>
                <input
                  type="text"
                  id="position"
                  placeholder="선호포지션"
                  value={position}
                  onChange={(event) => setPosition(event.target.value)}
                />
              </div>

              <div className="inputbox">
                <br />
                <label htmlFor="skill"></label>
                <input
                  type="text"
                  id="skill"
                  placeholder="실력"
                  value={skill}
                  onChange={(event) => setSkill(event.target.value)}
                />
              </div>

            <div className="modal-btns detail-btns">
              <button
                className="modal-no-btn"
                type="button"
                onClick={() => {
                  closeModal();
                }}
              >
                취소
              </button>

              <button
                className="modal-yes-btn"
                type="button"
                onClick={() => {
                  handleSubmit();
                  closeModal();
                }}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamDetail;
