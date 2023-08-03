import React, { useState } from 'react'
import './TeamSetting.css';
import TopNavbar from '../top_navbar/TopNavbar';
import TeamModal from './TeamModal';
import { Link } from 'react-router-dom';

function TeamSetting() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

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
    console.log('Image file:', image.name);
  };
  
  return (
    <div>
      <TopNavbar />

      <div className="team-setting-page">
        <div className='team-setting-section'>
        <div className="team-setting-info">
          <img
            className="team-logo-img"
            src={"/empty_img_circle.png"}
            alt="Logo"
          />
          <div className="team-name">Team Name</div>
          <button className='team-edit-btn team-join-btn' onClick={openEditModal}>팀 정보 수정</button>
        </div>
          <button className='team-del-btn' onClick={openDeleteModal}>팀 삭제하기</button>
        </div>

        <div className="team-settings">
            <div className='setting-category'>
                <Link to="/teamsetting" className='setting-link-selected'>멤버</Link>
                <div>|</div>
                <Link to="/teamsettingdaily" className='setting-link'>일정</Link>
            </div>

            <div className='member-now'>
                <img src={"/icon_member.png"} alt="img" />
                <div>멤버</div>
                <div>가입대기중</div>
            </div>
        </div>

      </div>

      <TeamModal
        title="팀 정보 수정"
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
      >
        <div>
              <label htmlFor="image">로고</label>
              <br/>
              <input
                type="file"
                id="image"
                onChange={(event) => setImage(event.target.files[0])}
              />
              <br />
              <br/>
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
        {/* 팀 삭제 모달의 내용을 여기에 넣으세요 */}
        <div>정말 삭제하시겠습니까?</div>
      </TeamModal>
    </div>
  );
}

export default TeamSetting;
