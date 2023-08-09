import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './components/member/Login';
import SignUp from './components/member/signUp';
import FindPassword from './components/member/FindPassword';
import { useNavigate } from 'react-router-dom';
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
import VideoChat from './components/interview/videoconference';
import TeamMatching from './components/match_team/Match_team';
import Mypage from './components/mypage/mypage';
import { RecoilRoot } from 'recoil';
import { useRecoilState } from 'recoil';
import { loggedInState } from './atoms/loginstate'; 
import IndividualMatching from './components/match_individual/Match_individual'

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loggedInState);

  return (
    <div>
      <Logo />
    
      {isLoggedIn ? (
        <div className="nav-items">
          <button className="auth-button" onClick={() => setIsLoggedIn(false)}>로그아웃</button>
          <Link to="/Mypage">Mypage</Link>
        </div>
      ) : (
        <div className="nav-items">
          <button className="auth-button" onClick={() => navigate("/login")}>로그인</button>
          <Link to="/videochat/12345">Video Chat</Link>
        </div>
      )}
      <br />
      <Navbar />
      
      <SwiperComponent />

      <div className='upcoming page-letter'>Upcoming Matches</div>
      <DateBar />
      <div className="link-container"></div>

      <div className='foot'>
        <div className='foot-one'>
          <img src='/small_logo.png' alt='logo' />
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

function App() {
  return (
    <RecoilRoot>
    <Router>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
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
        <Route path="/Match_team" element={<TeamMatching/>} />
        <Route path="/Mypage" element={<Mypage/>} />
        <Route path="/teamdetail/:teamId" element={<TeamDetail />} />
        <Route path="/teamsetting/:teamId" element={<TeamSetting />} />
        <Route path="/teamsettingjoinlist/:teamId" element={<TeamSettingJoinList />} />
        <Route path="/teamsettingdaily/:teamId" element={<TeamSettingDaily />} />
        <Route path="/Match_individual" element={<IndividualMatching />} />
      </Routes>
      </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;