import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useRecoilState } from "recoil";
import {
  emailState,
  passwordState,
  tokenState,
  loggedInState,
} from "../../../src/atoms";

const api = axios.create({
  baseURL: "https://i9d110.p.ssafy.io:8081",
  headers: {
    "Content-Type": "application/json",
  },
});

const Login = () => {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [token, setToken] = useRecoilState(tokenState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loggedInState);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const body = {
        email,
        password,
      };

      const response = await api.post("/users/login", body);

      if (response.data.state === "SUCCESS") {
        const accessToken = response.data.data.accessToken;

        setToken(accessToken);
        localStorage.setItem("token", accessToken);
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        setIsLoggedIn(true);

        navigate("/");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      Swal.fire({
        title: "로그인 실패",
        text: "이메일이나 비밀번호가 일치하지 않습니다.",
        icon: "error",
        confirmButtonText: "확인",
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
            로그인
          </button>
          <br />
          <br />
          <div className="snslogin">
            <div>SNS 계정으로 로그인</div>
            {/* <div className="snslogos">
              <Link to="/">
                <img src="/kakao_logo.png" alt="kakao_logo" />
              </Link>
              <Link to="/">
                <img src="/naver_logo.png" alt="naver_logo" />
              </Link>
              <Link to="/">
                <img src="/google_logo.png" alt="google_logo" />
              </Link>
            </div> */}
          </div>
          <div className="links">
            <div>
              <Link to="/signUp">이메일로 가입</Link>
            </div>
            <div>|</div>
            <div>
              <Link to="/findpwd">비밀번호 찾기</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
