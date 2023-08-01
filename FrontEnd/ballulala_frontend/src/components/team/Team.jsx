import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

function Team() {
  const [team, setTeam] = useState('');

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    console.log('Form submitted');
  };

  return (
    <div className="team-page">
      <div className="page-letter">TEAM</div>

      <Link to="/teamdetail">
        <img className="month-team-img" src="month_team.png" alt="Month Team" />
      </Link>

      {/* 지역별 버튼 리스트. 원하는 지역명으로 변경하고 해당 지역의 페이지 경로를 설정하세요. */}
      <div className="search-team">
        <div className="buttons">
          <button className="radius-button">지역별</button>
          <button className="radius-button">멤버 모집중</button>
          <button className="radius-button">mmr</button>
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

      {/* 여기에 전체 팀 리스트를 추가하세요. */}
      <div className="team-list">
        <ul>
          <li>팀 1</li>
          <li>팀 2</li>
          <li>팀 3</li>
        </ul>
      </div>

      <button onClick={openModal}>팀 등록하기</button>

      {showModal && (
        <div className="ball-modal">
          <div className="ball-modal-content">
            <div className="ball-modal-title">
              <div>모달 title 여기에</div>
            </div>

            <div>모달 content 여기에</div>

            <div className="modal-btns">
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

export default Team;
