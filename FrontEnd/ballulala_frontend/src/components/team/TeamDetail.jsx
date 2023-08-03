import React, { useState } from "react";
import "./TeamDetail.css";
import TopNavbar from '../top_navbar/TopNavbar';
import { Link } from 'react-router-dom';

function TeamDetail() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phonenum, setPhonenum] = useState('');
  const [position, setPosition] = useState('');
  const [skill, setSkill] = useState('');

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
        <div className="team-info">
          <img className="team-logo-img" src={"/empty_img_circle.png"} alt="Logo" />
          <div className="team-name">Team Name</div>
          <br />

          <div className="team-info-more">
            <img src={"/icon_member.png"} alt="img" />
            <div>6</div>
            <button className="team-more-btn">more</button>
          </div>

          <div className="team-info-more">
            <img src={"/icon_location.png"} alt="img" />
            <div>대구 달서구</div>
          </div>

          <div className="team-info-more">
            <img src={"/icon_soccer.png"} alt="img" />
            <div>3승 1패 (75%)</div>
            <button className="team-more-btn">more</button>
          </div>

          <br />
          <br />
          <button className="team-join-btn" type="submit" onClick={openModal}>
            가입신청
          </button>

        </div>

        <div className="team-more">
          <div>소개글 들어갈 공간</div>
          <Link to='/teamsetting'>팀 관리 페이지로</Link>
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
