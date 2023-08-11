import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './TeamRank.css';
import TopNavbar from '../top_navbar/TopNavbar';


function TeamRank() {
const [team, setTeam] = useState('');
const [showRegions, setShowRegions] = useState(false);

const coverImagePath = process.env.PUBLIC_URL + "/images/img_stadium_8.jpg";

  return (
    <div className='team-page'>
      <TopNavbar/>

      <div
        className="image-container sliding-image"
        style={{ backgroundImage: `url(${coverImagePath})` }}
      >
        <div className="rank-text">RANK (team)</div>
      </div>





      {/* 지역별 버튼 리스트. 원하는 지역명으로 변경하고 해당 지역의 페이지 경로를 설정하세요. */}
      <div className='search-team'>
        <div className='buttons'>
          <Link to="/teamrank">
            <button className='radius-btn-selected'>팀 순위</button>
          </Link>

          <Link to="/userrank">
            <button className='radius-btn'>개인 순위</button>
          </Link>
        </div>

          <div className="team-search-box">
          <label htmlFor="email"></label>
            <input
              type="team"
              id="team"
              placeholder="팀 이름 검색"
              value={team}
              onChange={(event) => setTeam(event.target.value)}
            />
          </div>

      </div>
      
      <div className="rank-second-line">
        <div className="buttons">
          <div className="region-container">
            <button
              className="rank-button"
              onClick={() => setShowRegions(!showRegions)}
            >
              지역별　▼
            </button>
            {showRegions && (
              <div className="region-list">
                <button>서울</button>
                <button>대구</button>
                {/* 추가로 지역 버튼을 넣고 싶으시면 여기에 추가하시면 됩니다. */}
              </div>
            )}
          </div>
        </div>

        <div className='rank-info'>
          <div>경기</div>
          <div>승률</div>
        </div>
      </div>

      {/* 여기에 전체 팀 리스트를 추가하세요. */}
      <div className='list'>
        <hr/>
        <div className='team-list'>
          <ul>
            <li>팀 1</li>
            <li>팀 2</li>
            <li>팀 3</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TeamRank