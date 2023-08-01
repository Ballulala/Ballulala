import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './FreeBoard.css';

function FreeBoard() {
    const [board, setBoard] = useState('');

  return (
    <div className='board-page'>
        <div className='page-letter'>COMMUNITY</div>
        <br/>

    <div className='community-nav'>
    <div className='board-category buttons'>
        <Link to="/freeboard">
            <button className='radius-button radius-button-selected'>자유게시판</button>
        </Link>

        <Link to="/bestboard">
            <button className='radius-button'>명예의 전당</button>
        </Link>
        
        <Link to="/findplayer">
            <button className='radius-button'>용병 모집</button>
        </Link>

        <Link to="/consulting">
            <button className='radius-button'>컨설팅</button>
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

export default FreeBoard