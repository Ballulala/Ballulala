import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './components/member/Login';
import Join from './components/member/Join';
import FindPassword from './components/member/FindPassword';
import Team from './components/team/Team'
import './App.css';

const Home = () => (
  <div>
    <div>
      <Link to="/login">Login</Link>
    </div>
    <div>
      <Link to="/team">Team</Link>
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
    </Routes>
  </Router>
  );
}

export default App;
