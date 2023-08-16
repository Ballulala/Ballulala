import React from "react";
import "./UserInfo.css";

function UserInfo({ age, gender, location, email }) {
  return (
    <div className="user-info">
      <p>나이: {age}살</p>
      <p>성별: {gender === 0 ? "남" : "여"}</p>
      <p>주소: {location}</p>
      <p>이메일: {email}</p>
    </div>
  );
}

export default UserInfo;
