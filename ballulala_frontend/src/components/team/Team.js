import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Team.css';

function Team() {
  const [team, setTeam] = useState('');

  return (
    <div className='team-page'>
      <div className='page-letter'>TEAM</div>
      
      {/* month_team.img 이미지를 홈으로 이동하도록 링크를 추가하세요. */}
      <Link to="/">
        <img className='month-team-img' src='month_team.png' alt='Month Team' />
      </Link>

      {/* 지역별 버튼 리스트. 원하는 지역명으로 변경하고 해당 지역의 페이지 경로를 설정하세요. */}
      <div className='search-team'>
          <div className='buttons'>
            <button className='radius-button'>지역별</button>
            <button className='radius-button'>멤버 모집중</button>
            <button className='radius-button'>mmr</button>
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

      {/* 여기에 전체 팀 리스트를 추가하세요. */}
      <div className="team-list">
        <ul>
          <li>팀 1</li>
          <li>팀 2</li>
          <li>팀 3</li>
        </ul>
      </div>
    </div>
  )
}

export default Team
