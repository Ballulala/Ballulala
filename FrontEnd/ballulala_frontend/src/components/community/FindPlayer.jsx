import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import TopNavbar from '../top_navbar/TopNavbar';


function FindPlayer() {
  const [board, setBoard] = useState('');

  const coverImagePath = process.env.PUBLIC_URL + "/images/img_stadium_2.jpg";

return (
  <div className='board-page'>
    <TopNavbar/>
      
    <div
        className="image-container sliding-image"
        style={{ backgroundImage: `url(${coverImagePath})` }}
      >
        <div className="rank-text">
            <div>용병 모집</div>
        </div>
      </div>

  <div className='community-nav'>
  <div className='board-category'>
      <Link to="/freeboard">
          <button className='radius-btn'>자유게시판</button>
      </Link>

      <Link to="/bestboard">
          <button className='radius-btn'>명예의 전당</button>
      </Link>
      
      <Link to="/findplayer">
          <button className='radius-btn-selected'>용병 모집</button>
      </Link>

      <Link to="/consulting">
          <button className='radius-btn'>컨설팅</button>
      </Link>
  </div>

  <div className="board-search-box">
      <label htmlFor="board"></label>
      <input
      type="board"
      id="board"
      placeholder="제목, 글쓴이, 내용으로 검색하기"
      value={board}
      onChange={(event) => setBoard(event.target.value)}
      />
  </div>
  </div>

  </div>
)
}
export default FindPlayer