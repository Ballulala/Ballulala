import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './components/member/Login';
import Join from './components/member/Join';
import FindPassword from './components/member/FindPassword';
import Team from './components/team/Team'
import FreeBoard from './components/community/FreeBoard';
import BestBoard from './components/community/BestBoard';
import FindPlayer from './components/community/FindPlayer';
import Consulting from './components/community/Consulting';
import TeamRank from './components/rank/TeamRank';
import UserRank from './components/rank/UserRank';
import './App.css';
import Navbar from './components/home/HomeNavbar';

const Home = () => (
  <div>
    <Navbar />
    <div>
      <Link to="/login">Login</Link>
    </div>

  </div>
);

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/findpassword" element={<FindPassword />} />
      <Route path="/team" element={<Team />} />
      <Route path="/freeboard" element={<FreeBoard />} />
      <Route path="/bestboard" element={<BestBoard />} />
      <Route path="/findplayer" element={<FindPlayer />} />
      <Route path="/consulting" element={<Consulting />} />
      <Route path="/teamrank" element={<TeamRank />} />
      <Route path="/userrank" element={<UserRank />} />
    </Routes>
  </Router>
  );
}

export default App;
