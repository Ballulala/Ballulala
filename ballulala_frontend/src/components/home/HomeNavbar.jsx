import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/team-match" className="nav-link">
              팀 매치
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/individual-match" className="nav-link">
              개인 매치
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teamrank" className="nav-link">
              랭킹
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-link">
              팀 정보
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/freeboard" className="nav-link">
              커뮤니티
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
