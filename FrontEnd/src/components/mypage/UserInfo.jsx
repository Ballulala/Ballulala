import React from "react";
import "./UserInfo.css";

function UserInfo({ age, gender, location, email, name }) {
  const locationMap = {
    0: "서울",
    1: "경기",
    2: "인천",
    3: "강원",
    4: "대구",
    5: "대전",
    6: "경남",
    7: "경북",
    8: "부산",
    9: "울산",
    10: "광주",
    11: "제주",
    12: "전남",
    13: "전북",
    14: "충남",
    15: "충북",
  };

  return (
    <div className="user-info">
      <p>이름: {name}</p>
      <p>나이: {age}살</p>
      <p>성별: {gender === 0 ? "남" : "여"}</p>
      <p>지역: {locationMap[location]}</p> <p>이메일: {email}</p>
    </div>
  );
}

export default UserInfo;
