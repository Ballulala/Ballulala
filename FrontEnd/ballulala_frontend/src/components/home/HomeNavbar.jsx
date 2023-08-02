import React from "react";
import { Link } from "react-router-dom";
import "./HomeNavbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/Match_team" className="nav-link">
              <div className="nav-content">
                <img
                  src={process.env.PUBLIC_URL + "/images/팀매치아이콘.png"}
                  alt="팀 매치"
                  className="nav-icon"
                />
                팀 매치
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/individual-match" className="nav-link">
              <div className="nav-content">
                <img
                  src={process.env.PUBLIC_URL + "/images/개인매치아이콘.png"}
                  alt="개인 매치"
                  className="nav-icon"
                />
                개인 매치
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teamrank" className="nav-link">
              <div className="nav-content">
                <img
                  src={process.env.PUBLIC_URL + "/images/랭킹아이콘.png"}
                  alt="랭킹"
                  className="nav-icon"
                />
                랭킹
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-link">
              <div className="nav-content">
                <img
                  src={process.env.PUBLIC_URL + "/images/팀정보 아이콘.png"}
                  alt="팀 정보"
                  className="nav-icon"
                />
                팀 정보
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/freeboard" className="nav-link">
              <div className="nav-content">
                <img
                  src={process.env.PUBLIC_URL + "/images/커뮤니티아이콘.png"}
                  alt="커뮤니티"
                  className="nav-icon"
                />
                커뮤니티
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
