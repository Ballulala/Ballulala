import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';


const Join = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [region, setRegion] = useState('');
  
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event?.preventDefault();
  
    if (password !== passwordConfirm) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
  
    // 회원가입 처리를 진행하세요
    console.log(`Email: ${email}, Password: ${password}`);
  };
  

  return (
    <div className="join-page">
      <div className="stadium-section">
        <Link to="/">
          <img src="/stadium.png" alt="stadium" />
        </Link>
      </div>

      <div className="join-section">
        <div className="letter">
          <div>회원 가입</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputbox">
            <hr />
            <label htmlFor="email"></label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="이메일"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <br />
          <div className="inputbox">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="inputbox">
            <br />
            <label htmlFor="passwordConfirm"></label>
            <input
              type="password"
              id="passwordConfirm"
              placeholder="비밀번호 확인"
              value={passwordConfirm}
              onChange={(event) => setPasswordConfirm(event.target.value)}
            />
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
            <label htmlFor="birthday"></label>
            <input
              type="date"
              id="birthday"
              placeholder="생일"
              value={birthday}
              onChange={(event) => setBirthday(event.target.value)}
            />
          </div>

          <div className="inputbox">
            <br />
            <label htmlFor="phonenumber"></label>
            <input
              type="tel"
              id="phonenumber"
              placeholder="휴대폰번호"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>

          <br />
          <button className="loginbtn" type="submit" onClick={openModal}>
            다음
          </button>

          <br />
          <br />
          <div>
            <Link to="/login">이미 계정이 있으신가요?</Link>
          </div>
        </form>

        {showModal && (
          <div className="ball-modal">
            <div className="ball-modal-content">
              <div className="ball-modal-title">
                <div>추가 정보 작성</div>
              </div>

              <div className="inputbox">
                <br />
                <label htmlFor="region"></label>
                <input
                  type="text"
                  id="region"
                  placeholder="구/군"
                  value={region}
                  onChange={(event) => setRegion(event.target.value)}
                />
              </div>

              <div className="inputbox">
                <br />
                <label htmlFor="region"></label>
                <input
                  type="text"
                  id="region"
                  placeholder="시/도"
                  value={region}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </div>

              <div className="inputbox">
                <br />
                <label htmlFor="region"></label>
                <input
                  type="text"
                  id="region"
                  placeholder="실력"
                  value={region}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </div>
              <br />

              <div className='modal-btns'>
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
    </div>
  );
};

export default Join;
