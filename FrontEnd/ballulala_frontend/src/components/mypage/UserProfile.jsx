import React from "react";
import "./UserProfile.css";
import UserStats from "./UserStats";
import TeamInfo from "./TeamInfo";
import UserPoints from "./UserPoints";
import UserInfo from "./UserInfo"; // 새로 추가된 줄입니다.

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <div className="left-section">
        <img src={user.profilePicture} alt="User profile" />
        <h2>{user.name}</h2>
        <UserInfo
          age={user.age}
          gender={user.gender}
          location={user.location}
          email={user.email}
        />
      </div>
      <div className="right-section">
        <TeamInfo teamLogo={user.teamLogo} teamName={user.teamName} />
        <UserStats mvpCount={user.mvpCount} mannerScore={user.mannerScore} />
        <UserPoints points={user.points} />
      </div>
    </div>
  );
}

export default UserProfile;
