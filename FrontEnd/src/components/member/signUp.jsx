import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './signUp.css';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  // const [sido, setSido] = useState("");
  const [gugun, setGugun] = useState("");

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const isValidEmail = (email) => {
    // email pattern
    const pattern = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    return pattern.test(email);
  };  

  const checkEmail = async (email) => {
    try {
      const response = await axios.post(`https://i9d110.p.ssafy.io:8081/users/signUp/emailCheck`,
        {
          email: email,
        },
      );
      return response.data.state;
    } catch (error) {
      console.error(error);
      console.log(email)
      return 'FAIL';
    }
  };
  
  const checkPhoneNumber = async (phoneNumber) => {
    try {
      const response = await axios.post(`https://i9d110.p.ssafy.io:8081/users/signUp/phoneNumberCheck`, 
        {
          phoneNumber: phoneNumber,
        },
      );
      return response.data.state;
    } catch (error) {
      console.error(error);
      return 'FAIL';
    }
  };
  
  const registerUser = async (userData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "https://i9d110.p.ssafy.io:8081/users/signUp",
        userData,
        config
      );

      return response.data.state;
    } catch (error) {
      console.error(error);
      return "FAIL";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!isValidEmail(email)) {
      Swal.fire({
        title: '회원가입 실패',
        text: '올바른 이메일 형식을 사용해 주세요.',
        icon: 'error',
        confirmButtonText: '확인',
      });
      return;
    }
  
    const userData = {
      email,
      password,
      name,
      nickname,
      birthday,
      phoneNumber,
      gender,
      gugun,
    };
  
    try {
      const [emailResult, phoneNumberResult] = await Promise.all([
        checkEmail(email),
        checkPhoneNumber(phoneNumber),
      ]);
  
      if (emailResult === 'SUCCESS' && phoneNumberResult === 'SUCCESS') {
        const result = await registerUser(userData);
        if (result === 'SUCCESS') {
          setIsSubmitSuccess(true);
          Swal.fire({
            title: "환영합니다!",
            text: "볼루랄라 가입이 완료되었습니다.",
            icon: "success",
            confirmButtonText: "확인",
          });
          navigate('/login');
        } else {
          setIsSubmitSuccess(false);
          Swal.fire({
            title: "회원가입 실패",
            text: "서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
            icon: "error",
            confirmButtonText: "확인",
          });
        }
      } else {
        setIsSubmitSuccess(false);
        // const result = await registerUser(userData);
        // console.log(result);
        console.log(checkEmail);
        console.log(checkPhoneNumber);
        Swal.fire({
          title: "회원가입 실패",
          text: "이메일이나 휴대폰번호를 다시 확인해주세요.",
          icon: "error",
          confirmButtonText: "확인",
        });
      }
    } catch (error) {
      // const result = await registerUser(userData);
      console.error(error);
      // console.log(result);
      console.log(checkEmail);
      console.log(checkPhoneNumber);
      setIsSubmitSuccess(false);
      Swal.fire({
        title: "회원가입 실패",
        text: "서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
        icon: "error",
        confirmButtonText: "확인",
      });
    }
  };
  

  return (
    <div className="join-page">
      <div className="stadium-section">
        <Link to="/">
          <img src="/stadium2.png" alt="stadium" />
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
              type="text"
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
            <label htmlFor="nickname"></label>
            <input
              type="text"
              id="nickname"
              placeholder="닉네임"
              value={nickname}
              onChange={(event) => setNickname(event.target.value)}
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

          <div className="inputbox">
            <br />
            <label htmlFor="gender"></label>
            <select
              className="inputbox selectbox"
              id="gender"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="">성별</option>
              <option value="0">남자</option>
              <option value="1">여자</option>
            </select>
          </div>

          <div className="inputbox">
        <br />
        <label htmlFor="gugun"></label>
        <select
          className="inputbox selectbox"
          id="gugun"
          value={gugun}
          onChange={(event) => setGugun(event.target.value)}
        >
          <option value="">시/도</option>
          <option value="0">서울</option>
          <option value="1">경기</option>
          <option value="2">인천</option>
          <option value="3">강원</option>
          <option value="4">대구</option>
          <option value="5">대전</option>
          <option value="6">경남</option>
          <option value="7">경북</option>
          <option value="8">부산</option>
          <option value="9">울산</option>
          <option value="10">광주</option>
          <option value="11">제주</option>
          <option value="12">전남</option>
          <option value="13">전북</option>
          <option value="14">충남</option>
          <option value="15">충북</option>
        </select>
      </div>


          <br />
          <button
            className="loginbtn"
            type="submit"
            onClick={(event) => {
              handleSubmit(event);
            }}
          >
            가입하기
          </button>

          <br />
          <br />
          <div>
            <Link to="/login" className='already'>이미 계정이 있으신가요?</Link>
          </div>
        </form>

       
      </div>
    </div>
  );
};

export default SignUp;
