import React from 'react';
import Navbar from './components/home/HomeNavbar';
import Logo from './components/home/HomeLogo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const Home = () => (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <Logo />
    <Navbar />
  
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
   
      </Routes>
    </Router>
  );
}


export default App;