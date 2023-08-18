import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import TopNavbar from '../top_navbar/TopNavbar';

function UserRank() {
const [player, setPlayer] = useState('');

const coverImagePath = process.env.PUBLIC_URL + "/images/img_stadium_8.jpg";

  return (
    <div className='team-page'>
      <TopNavbar/>
      
      <div
        className="image-container sliding-image"
        style={{ backgroundImage: `url(${coverImagePath})` }}
      >
        <div className="rank-text">RANK (player)</div>
      </div>

      {/* 지역별 버튼 리스트. 원하는 지역명으로 변경하고 해당 지역의 페이지 경로를 설정하세요. */}
      <div className='search-team'>
        <div className='buttons'>
          <Link to="/teamrank">
            <button className='radius-btn'>팀 순위</button>
          </Link>

          <Link to="/userrank">
            <button className='radius-btn-selected'>개인 순위</button>
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
      <div className='list'>
        <hr />
 <div>
 <div style={{margin: '50px', color: 'gray'}}>
  준비 중인 서비스입니다.
</div>



    {/* <ul>
      {teams.map((team, index) => (
        <li key={team.team_id}>
          <div className='team-rank-one'>
            <span>{index + 1}</span>
            <Link to={`/teamdetail/${team.team_id}`}>
              <img src={team.logo} alt={team.name + " 로고"} />
            </Link>
            <Link to={`/teamdetail/${team.team_id}`}>
              {team.name}
            </Link>
          </div>
          <div className='team-rank-two'>
            <div>{team.win_count+team.lose_count}</div>
            <div>{(team.win_count / (team.win_count + team.lose_count) * 100).toFixed(2)}%</div>
          </div>
        </li>
      ))}
    </ul> */}
        </div>
      </div>
    </div>
  )
}

export default UserRank