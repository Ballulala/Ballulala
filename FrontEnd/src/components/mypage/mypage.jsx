import React from "react";
import UserProfile from "./UserProfile";
import TopNavbar from "../top_navbar/TopNavbar";
import user from "./userdata";

function Mypage() {
  return (
    <div className="App">
      <TopNavbar />
      <UserProfile user={user} />
    </div>
  );
}

export default Mypage;
