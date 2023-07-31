import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './components/member/Login';
import Join from './components/member/Join';
import FindPassword from './components/member/FindPassword';
import Team from './components/team/Team'
import './App.css';
import Navbar from './components/home/HomeNavbar';
import Logo from './components/home/HomeLogo'

const Home = () => (
  <div>
    <Logo />
    <Navbar />
    <div className="link-container">
      <Link to="/login">Login</Link>
      <Link to="/team">Team</Link>
    </div>
  </div>
);

function App() {
  return (
  <Router>
    <div className="app-container"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/findpassword" element={<FindPassword />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;






