import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserProfile.css";
import UserStats from "./UserStats";
import TeamInfo from "./TeamInfo";
import UserPoints from "./UserPoints";
import UserInfo from "./UserInfo";

function UserProfile() {
  const [user, setUser] = useState(null);
  const calculateAge = (birthdayStr) => {
    const birthYear = parseInt(birthdayStr.split("-")[0], 10);
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          "https://i9d110.p.ssafy.io:8081/users/myInfo",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.data.state === "SUCCESS") {
          setUser(response.data.user);
        }
      } catch (error) {
        console.error("유저 정보 불러오기 실패", error);
      }
    };

    fetchUserInfo();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <div className="left-section">
        <p>User logo</p>
        <img
          src={user.profileImage || "default_image_url"}
          alt="User profile"
        />
        <h2>{user.nickname}</h2>
        <UserInfo
          age={calculateAge(user.birthday)}
          gender={user.gender}
          location={`${user.sido || ""} ${user.gugun || ""}`}
          email={user.email}
        />
      </div>
      <div className="right-section">
        <TeamInfo teamLogo={user.profileImage} teamName={user.nickname} />
        <UserStats mvpCount={user.mvpCount} mannerScore={user.manner} />
        <UserPoints points={user.point} />
      </div>
    </div>
  );
}

export default UserProfile;
