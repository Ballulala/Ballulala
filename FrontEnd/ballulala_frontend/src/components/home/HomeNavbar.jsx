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
                  src={process.env.PUBLIC_URL + '/images/icon_team_match.png'}
                  alt="팀 매치"
                  className="nav-icon"
                />
                <div className="nav-letter">팀 매치</div>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Match_individual" className="nav-link">
              <div className="nav-content">
                <img
                  src={process.env.PUBLIC_URL + "/images/icon_person_match.png"}
                  alt="개인 매치"
                  className="nav-icon"
                />
                <div className="nav-letter">개인 매치</div>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teamrank" className="nav-link">
              <div className="nav-content">
                <img
                  src={process.env.PUBLIC_URL + "/images/icon_rank.png"}
                  alt="랭킹"
                  className="nav-icon"
                />
                <div className="nav-letter">랭킹</div>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-link">
              <div className="nav-content">
                <img
                  src={process.env.PUBLIC_URL + "/images/icon_team_info.png"}
                  alt="팀 정보"
                  className="nav-icon"
                />
                <div className="nav-letter">팀 정보</div>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/freeboard" className="nav-link">
              <div className="nav-content">
                <img
                  src={process.env.PUBLIC_URL + "/images/icon_community.png"}
                  alt="커뮤니티"
                  className="nav-icon"
                />
                <div className="nav-letter">커뮤니티</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
