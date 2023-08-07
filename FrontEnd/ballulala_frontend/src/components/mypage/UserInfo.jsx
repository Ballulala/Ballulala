import React from "react";
import "./UserInfo.css";

function UserInfo({ age, gender, location, email }) {
  return (
    <div className="user-info">
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Location: {location}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserInfo;
