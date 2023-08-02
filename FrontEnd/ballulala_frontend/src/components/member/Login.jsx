import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import Swal from 'sweetalert2';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('your-backend-api/login', {
        email: email,
        password: password,
      });
  
      // 컴포넌트의 상태 또는 로컬 저장소에 토큰 및 사용자 정보를 저장할 수 있습니다.
      // 예를 들어:
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
  
      // 성공적인 로그인 후 원하는 페이지로 사용자를 리디렉션하기
      // history.push('/home');
  
    } catch (error) {
      // 로그인 실패 시, SweetAlert2를 사용하여 알림을 표시합니다.
      Swal.fire({
        title: '로그인 실패',
        text: '이메일이나 비밀번호가 일치하지 않습니다.',
        icon: 'error',
        confirmButtonText: '확인',
      });
    }
  };
  
  

  return (
    <div className="login-page">
      <div className="stadium-section">
        <Link to="/">
          <img src="/stadium2.png" alt="stadium" />
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
