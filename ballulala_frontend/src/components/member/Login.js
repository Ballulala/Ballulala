import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    // 이곳에서 로그인 처리를 진행하세요
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-page">
      <div className="stadium-section">
        <Link to="/">
          <img src="/stadium.png" alt="stadium" />
        </Link>
      </div>

      <div className="login-section">
        <div className="letter">
          <div>로그인</div>
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
          <br />
          <button className="loginbtn" type="submit">
            로그인하기
          </button>
          <br />
          <br />
          <div className="snslogin">
            <div>SNS 계정으로 로그인</div>
            <div className="snslogos">
              <Link to="/">
                <img src="/kakao_logo.png" alt="kakao_logo" />
              </Link>
              <Link to="/">
                <img src="/naver_logo.png" alt="naver_logo" />
              </Link>
              <Link to="/">
                <img src="/google_logo.png" alt="google_logo" />
              </Link>
            </div>
          </div>
          <div className="links">
            <div>
              <Link to="/join">이메일로 가입</Link>
            </div>
            <div>|</div>
            <div>
              <Link to="/findpassword">비밀번호 찾기</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
