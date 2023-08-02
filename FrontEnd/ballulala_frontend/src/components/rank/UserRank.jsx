import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import TopNavbar from '../top_navbar/TopNavbar';

function UserRank() {
const [player, setPlayer] = useState('');

  return (
    <div className='team-page'>
      <TopNavbar/>
      <div className='page-letter'>RANK</div>
      
      {/* month_team.img 이미지를 홈으로 이동하도록 링크를 추가하세요. */}
      <Link to="/">
        <img className='month-team-img' src='league.png' alt='league' />
      </Link>

      {/* 지역별 버튼 리스트. 원하는 지역명으로 변경하고 해당 지역의 페이지 경로를 설정하세요. */}
      <div className='search-team'>
        <div className='buttons'>
          <Link to="/teamrank">
            <button className='radius-button'>팀 순위</button>
          </Link>

          <Link to="/userrank">
            <button className='radius-button-selected radius-button'>개인 순위</button>
          </Link>
        </div>

          <div className="team-search-box">
          <label htmlFor="email"></label>
            <input
              type="player"
              id="player"
              placeholder="유저 이름 검색"
              value={player}
              onChange={(event) => setPlayer(event.target.value)}
            />
          </div>
      </div>

      <div className='rank-second-line'>
        <div className='buttons'>
          <button className='rank-button'>MVP 횟수</button>
          <button className='rank-button'>매너지수</button>
          <button className='rank-button'>골 횟수</button>
        </div>
      </div>

      {/* 여기에 전체 팀 리스트를 추가하세요. */}
      <div className="team-list">
        <ul>
          <li>유저 1</li>
          <li>유저 2</li>
          <li>유저 3</li>
        </ul>
      </div>
    </div>
  )
}

export default UserRank