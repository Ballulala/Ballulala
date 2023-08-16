import React, { useState, useEffect } from 'react'
import './TeamSetting.css';
import TopNavbar from '../top_navbar/TopNavbar';
import TeamModal from './TeamModal';
import { Link, useParams } from 'react-router-dom';
import { teamDetailData } from './TeamDummyData';

function TeamSettingDaily() {
  const { teamId } = useParams();
  const [team, setTeam] = useState({});

  useEffect(() => {
    const foundTeam = teamDetailData.find((t) => t.team_id === teamId);
    if (foundTeam) {
      setTeam(foundTeam);
    }
  }, [teamId]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div>
      <TopNavbar />

      <div className="team-setting-page">
        <div className='team-setting-section'>
        <div className="team-setting-info">
        <img className="team-set-logo-img" src={team.logo} alt={`${team.name} 로고`} />
          <div className="team-name">{team.name}</div>
          <button className='team-edit-btn team-join-btn' onClick={openEditModal}>팀 정보 수정</button>
        </div>
          <button className='team-del-btn' onClick={openDeleteModal}>팀 삭제하기</button>
        </div>

        <div className="team-settings">
            <div className='setting-category'>
                <Link to={`/teamsetting/${teamId}`} className='setting-link'>멤버</Link>
                <div>|</div>
                <Link to={`/teamsettingdaily/${teamId}`} className='setting-link-selected'>일정</Link>
            </div>
            
        <div>일정들</div>
        
        </div>
      </div>


      <TeamModal
        title="팀 정보 수정"
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
      >
      </TeamModal>

      <TeamModal
        title="팀 삭제하기"
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
      >
        {/* 팀 삭제 모달의 내용을 여기에 넣으세요 */}
        <div>정말 삭제하시겠습니까?</div>
      </TeamModal>
    </div>
  );
}

export default TeamSettingDaily;
