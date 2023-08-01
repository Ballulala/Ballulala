import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FindPassword.css';

const FindPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // 비밀번호 찾기 처리를 진행하세요
    console.log(`Email: ${email}`);
  };

  return (
    <div className="find-page">
      <div className="stadium-section">
        <Link to="/">
          <img src="/stadium.png" alt="stadium" />
        </Link>
      </div>

      <div className="find-section">
        <div className="letter">
          <div>비밀번호 찾기</div>
        </div>
        <form onSubmit={handleSubmit}>
          <hr />
          <br />
          <p className="navy-letter">
            비밀번호 재설정을 위한 이메일을 입력하세요.
          </p>
          <div className="inputbox">
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
          <br />
          <button className="loginbtn" type="submit">
            제출
          </button>
        </form>
      </div>
    </div>
  );
};

export default FindPassword;
