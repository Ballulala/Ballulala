import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserProfile.css";
import UserStats from "./UserStats";
import TeamInfo from "./TeamInfo";
import UserPoints from "./UserPoints";
import UserInfo from "./UserInfo";

function UserProfile() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
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
          setTeams(response.data.teamList);
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
        <p>User profile</p>
        <img
          src={`./pointstoreimages/${user.profileImage}.png`}
          alt="User profile"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/first_profile.png";
          }}
        />
        <h2>{user.nickname}</h2>
        <UserInfo
          age={calculateAge(user.birthday)}
          gender={user.gender}
          location={`${user.gugun || ""}`}
          email={user.email}
          name={user.name}
        />
      </div>
      <div className="right-section">
        <TeamInfo
          teamLogo={user.profileImage}
          teams={teams}
          selectedTeam={selectedTeam}
          onSelectTeam={setSelectedTeam}
        />
        <UserStats mmr={selectedTeam ? selectedTeam.mmr : "N/A"} />
        <UserPoints points={user.point} />
      </div>
    </div>
  );
}

export default UserProfile;
