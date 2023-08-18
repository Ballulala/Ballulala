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
  
   // 가입 대기 사용자 승인 버튼 클릭 시 실행될 함수
   const handleUserApproval = async (userId) => {
    try {
      const response = await axios.post(
        `https://i9d110.p.ssafy.io:8081/teamUser/joinAllow?id=${userId}`,
        {},
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      // if (response.status === 200) {
        console.log("승인되었습니다.");
        // 가입 대기 사용자 목록 업데이트
        setWaitingUsers(waitingUsers.filter((user) => user.id !== userId));
      // }
    } catch (error) {
      console.log("승인에 실패했습니다:", error);
    }
  };

  const handleUserDenial = async (userId) => {
    try {
      const response = await axios.get(
        `https://i9d110.p.ssafy.io:8081/teamUser/joinDenied`,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          params: {
            teamId: teamId,
            UserId: userId,
          },
        }
      );
  
      // if (response.status === 200) {
        console.log("거절되었습니다.");
        // 가입 대기 사용자 목록 업데이트
        setWaitingUsers(waitingUsers.filter((user) => user.id !== userId));
      // }
    } catch (error) {
      console.log("거절에 실패했습니다:", error);
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
      // team 객체에서 원래 정보를 상태 변수에 설정합니다.
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
  
          // if (response.status === 200) {
            setTeam(response.data.teamDetail);
            console.log(response.data.teamDetail.id)
          // }
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
  
          // if (response.status === 200) {
            setWaitingUsers(response.data.matchList.map((match) => match.user));
            console.log(response.data.matchList)
            console.log(response.data.matchList.map((match) => match.user));
          // }
        } catch (error) {
          console.log("가입 대기 사용자 목록을 가져오는데 실패했습니다:", error);
          setWaitingUsers([]);
        }
      }
  
      getTeamDataFromServer(); // 팀 정보 호출
      fetchWaitingUsers();      // 가입 대기 사용자 목록 호출
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
          {/* <button className="team-del-btn" onClick={openDeleteModal}>
            팀 삭제하기
          </button> */}
        </div>

        <div className="team-settings">
          <div className="member-now">
            <img src={"/icon_member.png"} alt="img" className='set-icon'/>
            {/* <Link to={`/teamsetting/${teamId}`} className='setting-link'>
              멤버
            </Link> */}
            <Link to={`/teamsettingjoinlist/${teamId}`} className='setting-link-selected'>
              가입대기중
            </Link>
          </div>

          <div className="member-list">
            {waitingUsers.map((user) => (
              <div key={user.id}>
                {user.nickname} ({user.email}){" "}
                <button
  className="btn btn-primary"
  onClick={() => handleUserApproval(user.id)}
  style={{ marginLeft: '20px' }}
>
                  승인
                </button>
                {/* <button
  className="btn btn-danger"
  onClick={() => handleUserDenial(user.id)}
>
  거절
</button> */}

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
