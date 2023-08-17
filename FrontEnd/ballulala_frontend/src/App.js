import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './components/member/Login';
import SignUp from './components/member/signUp';
import FindPassword from './components/member/FindPassword';
import { useNavigate } from 'react-router-dom';
import Team from './components/team/Team'

import FreeBoard from './components/community/FreeBoard';
import FreeBoardAdd from './components/community/FreeBoardAdd';
import FreeBoardDetail from './components/community/FreeBoardDetail';
import FreeBoardModify from './components/community/FreeBoardModify';

import FindPlayer from './components/community/FindPlayer';
import FindPlayerAdd from './components/community/FindPlayerAdd';
import FindPlayerDetail from './components/community/FindPlayerjDetail';
import FindPlayerModify from './components/community/FindPlayerModify';

import TeamRank from './components/rank/TeamRank';
import UserRank from './components/rank/UserRank';
import TeamDetail from './components/team/TeamDetail';
import TeamSetting from './components/team/TeamSetting';
import TeamSettingJoinList from './components/team/TeamSettingJoinList';
// import TeamSettingDaily from './components/team/TeamSettingDaily';
import './App.css';
import Navbar from './components/home/HomeNavbar2';
// import SwiperComponent from './components/home/swiper';
import HomeDateBar from './components/home/HomeDateBar';
import VideoChat from './components/interview/videoconference';
import TeamMatching from './components/match_team/Match_team';
import Mypage from './components/mypage/mypage';
import { RecoilRoot } from 'recoil';
import { useRecoilState } from 'recoil';
import { loggedInState } from './atoms/loginstate';
import IndividualMatching from './components/match_individual/Match_individual'
import axios from "axios";
import PointShop from "./components/points/individual_points";
import React, { useEffect } from "react";
import Inventory from './components/points/inven';


const Home = () => {
  const coverImagePath = process.env.PUBLIC_URL + "/images/img_stadium_3.jpg";

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loggedInState);
  
  const handleLogout = () => {

    setIsLoggedIn(false);
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem('token');
    navigate("/login");
  };

  return (
    <div>
    
      <Navbar />
    
      {isLoggedIn ? (
  <div className="nav-items">
    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    <Link to="/Mypage">Mypage</Link>
  </div>
) : (
  <div className="nav-items">
    <button onClick={() => navigate("/login")}>Login</button>
    
    {/* <Link to="/videochat/12345" tabIndex={-1}>
      <button>Video Chat</button>
    </Link> */}
  </div>
)}
<br />

      <div
        className="image-container sliding-image"
        style={{ backgroundImage: `url(${coverImagePath})` }}
      >
        <div className="rank-text home-text">
            <div>Ballulala !</div>
        </div>
      </div>

      <div className='upcoming'>
        <div>Upcoming</div>
        <div className='upcoming-one'>
          <div className="slide-up-down">Matches</div>
          <div className='upcoming-arrow'>↘</div>
        </div>
      </div>
      <HomeDateBar />
      <div className="link-container"></div>

      <div className='foot'>
        <div className='foot-one'>
         <div className="nav-one" style={{ padding: "0px" }}>BALLULALA</div>
        </div>
        <div className='foot-two'>
          SSAFY 9기 프로젝트
          <br />
          김정환 김근우 김상진 김슬기 채경호 천병찬
        </div>
      </div>
    </div>
  );
};
function Root() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}
function App() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loggedInState);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
      setIsLoggedIn(true);
    }
  }, []);

  return (
   
    <Router>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/findpwd" element={<FindPassword />} />
        <Route path="/team" element={<Team />} />
        <Route path="/freeboard" element={<FreeBoard />} />
        <Route path="/freeboard/add" element={<FreeBoardAdd />} />
        <Route path="/freeboard/:boardID" element={<FreeBoardDetail />} />
        <Route path="/freeboard/modify/:boardID" element={<FreeBoardModify />} />
        
        <Route path="/findplayer" element={<FindPlayer />} />
        <Route path="/findplayer/add" element={<FindPlayerAdd />} />
        <Route path="/findplayer/:boardID" element={<FindPlayerDetail />} />
        <Route path="/findplayer/modify/:boardID" element={<FindPlayerModify />} />

        <Route path="/teamrank" element={<TeamRank />} />
        <Route path="/userrank" element={<UserRank />} />
        <Route path="/teamdetail" element={<TeamDetail />} />
        <Route path="/teamsetting" element={<TeamSetting />} />
        <Route path="/teamsettingjoinlist" element={<TeamSettingJoinList />} />
        {/* <Route path="/teamsettingdaily" element={<TeamSettingDaily />} /> */}
        <Route path="/videochat/:id" element={<VideoChat />} />
        <Route path="/Match_team" element={<TeamMatching/>} />
        <Route path="/Mypage" element={<Mypage/>} />
        <Route path="/teamdetail/:teamId" element={<TeamDetail />} />
        <Route path="/teamsetting/:teamId" element={<TeamSetting />} />
        <Route path="/teamsettingjoinlist/:teamId" element={<TeamSettingJoinList />} />
        {/* <Route path="/teamsettingdaily/:teamId" element={<TeamSettingDaily />} /> */}
        <Route path="/Match_individual" element={<IndividualMatching />} />
        <Route path="/Pointshop" element={<PointShop />} />
        <Route path="/Inventory" element={<Inventory />} />
      </Routes>
      </div>
      </Router>
   
  );
}

export default Root;