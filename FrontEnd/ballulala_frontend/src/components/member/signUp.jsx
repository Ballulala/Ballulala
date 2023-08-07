import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './signUp.css';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


const Join = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [sido, setSido] = useState('');
  const [gugun, setGugun] = useState('');

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const checkEmail = async (email) => {
    try {
      const response = await axios.get(`http://i9d110.p.ssafy.io:8081/users/signUp/emailCheck`);
      return response.data.state;
    } catch (error) {
      console.error(error);
      return 'FAIL';
    }
  };

  const checkPhoneNumber = async (phoneNumber) => {
    try {
      const response = await axios.get(`http://i9d110.p.ssafy.io:8081/users/signUp/phoneNumberCheck`);
      return response.data.state;
    } catch (error) {
      console.error(error);
      return 'FAIL';
    }
  };

  const handleClick = () => {
    if (isSubmitSuccess) {
      openModal();
    } 
    // else {
    //   alert('회원가입 중 오류가 발생했습니다.');
    // }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const registerUser = async (userData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "http://i9d110.p.ssafy.io:8081/users/signUp",
        userData,
        config
      );

      return response.data.state;
    } catch (error) {
      console.error(error);
      return 'FAIL';
    }
  }; 

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
      name,
      nickname,
      birthday,
      phoneNumber,
      gender,
    };

    const result = await registerUser(userData);
    
    const emailResult = await checkEmail(email);
    const phoneNumberResult = await checkPhoneNumber(phoneNumber);

    if (result === 'SUCCESS') {
      setIsSubmitSuccess(true);
      openModal();
      console.log(result)
    } 
    // if (result === 'SUCCESS' && emailResult === 'SUCCESS' && phoneNumberResult === 'SUCCESS') {
    //   setIsSubmitSuccess(true);
    //   openModal();
    //   console.log(result)
    // } 
    else {
      setIsSubmitSuccess(false);
      console.log(result)
      console.log(emailResult)
      console.log(phoneNumberResult)
      Swal.fire({
        title: "회원가입 실패",
        text: "이메일과 휴대폰번호를 다시 확인해보세요.",
        icon: "error",
        confirmButtonText: "확인",
      });
    }
  };

  const handleFinalSubmit = async (event) => {
    event.preventDefault();

    Swal.fire({
      title: "환영합니다!",
      text: "볼루랄라 가입이 완료되었습니다.",
      icon: "success",
      confirmButtonText: "확인",
    });
    navigate('/');
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
            <label htmlFor="phonenumber"></label>
            <input
              type="tel"
              id="gender"
              placeholder="성별"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            />
          </div>

          <br />
          <button
            className="loginbtn"
            type="submit"
            onClick={(event) => {
              handleSubmit(event);
              handleClick();
            }}
          >
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
                <label htmlFor="sido"></label>
                <input
                  type="text"
                  id="sido"
                  placeholder="시/도"
                  value={sido}
                  onChange={(event) => setSido(event.target.value)}
                />
              </div>

              <div className="inputbox">
                <br />
                <label htmlFor="gugun"></label>
                <input
                  type="text"
                  id="gugun"
                  placeholder="구군"
                  value={gugun}
                  onChange={(event) => setGugun(event.target.value)}
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
                onClick={(event) => {
                  handleFinalSubmit(event);
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
