import React, { useState, useEffect } from 'react';
import './TeamSetting.css';
import TopNavbar from '../top_navbar/TopNavbar';
import TeamModal from './TeamModal';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { tokenState } from "../../atoms/token";
import { useRecoilValue } from "recoil";

function TeamSetting() {
  const [members, setMembers] = useState([]);

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const { teamId } = useParams();
  const [team, setTeam] = useState({});

  const token = useRecoilValue(tokenState);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(`https://i9d110.p.ssafy.io:8081/teamUser/teamUserList?team=${teamId}`);
        setMembers(Array.isArray(response.data.matchList) ? response.data.matchList : []);
        console.log(response.data.matchList)
      } catch (error) {
        console.error('멤버 명단을 가져오는데 실패했습니다:', error);
      }
    };

    fetchMembers();
  }, [teamId]);

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

      } catch (error) {
        console.log("팀 데이터를 가져오는데 실패했습니다:", error);
        setTeam({});
      }
    }
    getTeamDataFromServer();
  }, [teamId, token]);

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
      // team 객체에서 원래 정보를 상태 변수에 설정합니다.
      setImage(team.image);
      setName(team.name);
      setLocation(team.location);
      setStatusMsg(team.statusMsg);
    }

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
          {/* <button className="team-del-btn" onClick={openDeleteModal}>
            팀 삭제하기
          </button> */}
        </div>

        <div className="team-settings">
            <div className="member-now">
            <img src={"/icon_member.png"} alt="img" className='set-icon'/>
            <Link to={`/teamsetting/${teamId}`} className='setting-link-selected'>
              멤버
            </Link>
            <Link to={`/teamsettingjoinlist/${teamId}`} className='setting-link'>
              가입대기중
            </Link>
          </div>

          <div className='member-list'>
            <ul>
              {members.map((member) => (
                <li key={member.user.id}>{member.user.nickname}</li>
              ))}
            </ul>
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

export default TeamSetting;
