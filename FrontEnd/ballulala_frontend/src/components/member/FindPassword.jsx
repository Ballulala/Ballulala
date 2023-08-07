import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./FindPassword.css";

const FindPassword = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const findPassword = async (name, email) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const userData = { name, email };

    try {
      const response = await axios.post(
        "http://localhost:8080/users/findpwd",
        userData,
        config
      );
      return response.data.state;
    } catch (error) {
      console.error(error);
      return "fail";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await findPassword(name, email);
    console.log(`Result: ${result}`);
  };

  return (
    <div className="find-page">
      <div className="stadium-section">
        <Link to="/">
          <img src="/stadium2.png" alt="stadium" />
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
            비밀번호 재설정을 위한 이름, 이메일을 입력하세요.
          </p>
          <div className="inputbox">
            <label htmlFor="name"></label>
            <br />
            <input
              type="name"
              id="name"
              placeholder="이름"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
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
