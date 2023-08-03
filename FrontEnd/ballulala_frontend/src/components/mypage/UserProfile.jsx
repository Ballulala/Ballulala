import React from "react";
import "./UserProfile.css";
import UserStats from "./UserStats";

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <div className="left-section">
        <img src={user.profilePicture} alt="User profile" />
        <h2>{user.name}</h2>
        <p>Age: {user.age}</p>
        <p>Gender: {user.gender}</p>
        <p>Location: {user.location}</p>
        <p>Email: {user.email}</p>
      </div>
      <div className="right-section">
        <p>
          {" "}
          <img src={user.teamLogo} alt="Team logo" />
          Team: {user.teamName}
        </p>
        <UserStats mvpCount={user.mvpCount} mannerScore={user.mannerScore} />
      </div>
    </div>
  );
}

export default UserProfile;
