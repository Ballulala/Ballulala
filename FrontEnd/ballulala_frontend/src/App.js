import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './components/member/Login';
import Join from './components/member/Join';
import FindPassword from './components/member/FindPassword';
import Team from './components/team/Team'
import FreeBoard from './components/community/FreeBoard';
import FreeBoardDetail from './components/community/FreeBoardDetail';
import BestBoard from './components/community/BestBoard';
import FindPlayer from './components/community/FindPlayer';
import Consulting from './components/community/Consulting';
import TeamRank from './components/rank/TeamRank';
import UserRank from './components/rank/UserRank';
import TeamDetail from './components/team/TeamDetail';
import TeamSetting from './components/team/TeamSetting';
import TeamSettingJoinList from './components/team/TeamSettingJoinList';
import TeamSettingDaily from './components/team/TeamSettingDaily';
import './App.css';
import Navbar from './components/home/HomeNavbar';
import Logo from './components/home/HomeLogo'
import SwiperComponent from './components/home/swiper';
import DateBar from './components/date_bar/Date_Bar.jsx';
import Sidebar from './components/side_bar/Side_Bar';
import VideoChat from './components/interview/videoconference';
import Matchteam from './components/match_team/Match_team';
import Mypage from './components/mypage/mypage';
import { RecoilRoot } from 'recoil';
const Home = () => (
  <div>
    
    <Logo />
    < Sidebar />  
    <Link to="/login" className="login-link">Login</Link> 
    <Link to="/videochat/12345">Video Chat</Link>
    <Link to="/Mypage">Mypage</Link>
      <Navbar />
      
      <SwiperComponent/>
      <DateBar />
    <div className="link-container">
     
    </div>

  </div>
);

function App() {
  return (
    <RecoilRoot>
    <Router>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/findpwd" element={<FindPassword />} />
        <Route path="/team" element={<Team />} />
        <Route path="/freeboard" element={<FreeBoard />} />
        <Route path="/freeboarddetail" element={<FreeBoardDetail />} />
        <Route path="/bestboard" element={<BestBoard />} />
        <Route path="/findplayer" element={<FindPlayer />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/teamrank" element={<TeamRank />} />
        <Route path="/userrank" element={<UserRank />} />
        <Route path="/teamdetail" element={<TeamDetail />} />
        <Route path="/teamsetting" element={<TeamSetting />} />
        <Route path="/teamsettingjoinlist" element={<TeamSettingJoinList />} />
        <Route path="/teamsettingdaily" element={<TeamSettingDaily />} />
        <Route path="/videochat/:id" element={<VideoChat />} />
        <Route path="/Match_team" element={<Matchteam/>} />
        <Route path="/Mypage" element={<Mypage/>} />
      </Routes>
      </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;






