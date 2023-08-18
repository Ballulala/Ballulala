import React, { useState, useEffect } from 'react';
import './TeamSetting.css';
import TopNavbar from '../top_navbar/TopNavbar';
import TeamModal from './TeamModal';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { tokenState } from "../../atoms/token";
import { useRecoilValue } from "recoil";

function TeamSettingJoinList() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const { teamId } = useParams();
  const [team, setTeam] = useState({});

  const token = useRecoilValue(tokenState);
  const [waitingUsers, setWaitingUsers] = useState([]);

   const handleUserApproval = async (matchId) => {
    try {
      const response = await axios.post(
        `https://i9d110.p.ssafy.io:8081/teamUser/joinAllow?id=${matchId}`,
        {},
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );  

    } catch (error) {
      console.log("승인에 실패했습니다:", error);
    }
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);};

  const closeEditModal = () => {
    setIsEditModalOpen(false);};

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);};

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    console.log('Image file:', image.name);};

    const handleUpdateTeamInfo = () => {
      setImage(team.image);
      setName(team.name);
      setLocation(team.location);
      setStatusMsg(team.statusMsg);
    }

    useEffect(() => {
      async function getTeamDataFromServer() {
        try {
          const response = await axios.post(
            "https://i9d110.p.ssafy.io:8081/teams/detail",
            { id: teamId },
            {
              headers: {
                Authorization: token,
                "Content-Type": "application/json",
              },
            }
          );
  
            setTeam(response.data.teamDetail);
            console.log(response.data.teamDetail.id)
        } catch (error) {
          console.log("팀 데이터를 가져오는데 실패했습니다:", error);
          console.log(teamId);
          setTeam({});
        }
      }
  
      async function fetchWaitingUsers() {
        try {
          const response = await axios.get(
            `https://i9d110.p.ssafy.io:8081/teamUser/joinList?team=${teamId}`,
            {
              headers: {
                Authorization: token,
                "Content-Type": "application/json",
              },
            }
          );
  
            setWaitingUsers(
              response.data.matchList.map((match) => ({
                matchId: match.id,
                userInfo: match.user,
              }))
            );
            console.log(response.data.matchList)
            console.log(response.data.matchList.map((match) => match.user));
          // }
        } catch (error) {
          console.log("가입 대기 사용자 목록을 가져오는데 실패했습니다:", error);
          setWaitingUsers([]);
        }
      }
  
      getTeamDataFromServer();
      fetchWaitingUsers();
    }, [teamId, token]);

  return (
    <div>
      <TopNavbar />

      <div className="team-setting-page">
        <div className="team-setting-section">
          <div className="team-setting-info">
          <img className="team-set-logo-img" src={`/images/${team.logo}.png`} alt={`${team.name} 로고`} />
            <div className="team-name">{team.name}</div>
            <button className="team-edit-btn team-join-btn" onClick={openEditModal}>
              팀 정보 수정
            </button>
          </div>
        </div>

        <div className="team-settings">
          <div className="member-now">
            <img src={"/icon_member.png"} alt="img" className='set-icon'/>
            <Link to={`/teamsettingjoinlist/${teamId}`} className='setting-link-selected'>
              가입대기중
            </Link>
          </div>

          <div className="member-list">
  {waitingUsers.map((waitingUser) => (
    <div key={waitingUser.userInfo.id}>
      {waitingUser.userInfo.nickname} ({waitingUser.userInfo.email}){" "}
      <button
        className="btn btn-primary"
        onClick={() => handleUserApproval(waitingUser.matchId)}
        style={{ marginLeft: "20px" }}
      >
        승인
      </button>
    </div>
  ))}
</div>

        </div>
      </div>

      <TeamModal
        title="팀 정보 수정"
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        onSubmit={handleUpdateTeamInfo}
      >
        <div>

          <label htmlFor="name">팀 이름</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className='modal-input'
          />
          <br />
          <br/>
          <label htmlFor="location">위치</label>
          <br />
          <input
            type="text"
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className='modal-input'
          />
          <br />
          <br/>
          <label htmlFor="statusMsg">소개 (선택)</label>
          <br />
          <input
            type="text"
            id="statusMsg"
            value={statusMsg}
            onChange={(event) => setStatusMsg(event.target.value)}
            className='modal-input'
          />
        </div>
      </TeamModal>

      <TeamModal
        title="팀 삭제하기"
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
      >
        <div>정말 삭제하시겠습니까?</div>
      </TeamModal>
    </div>
  );
}

export default TeamSettingJoinList;
