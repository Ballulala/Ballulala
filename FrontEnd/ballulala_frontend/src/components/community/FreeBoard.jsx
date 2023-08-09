import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './FreeBoard.css';
import TopNavbar from '../top_navbar/TopNavbar';
import axios from 'axios';

function FreeBoard() {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const response = await axios.get('https://i9d110.p.ssafy.io:8081/freeboard/list');
                console.log("Response data:", response.data);
                setBoards(response.data.freeBoardList)
            } catch (error) {
                console.error('Failed to fetch boards:', error);
            }
        };
    
        fetchBoards();
    
    }, []);
      

  return (
    <div className='board-page'>
        <TopNavbar/>
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
        // value={board}
        // onChange={(event) => setBoard(event.target.value)}
        />
    </div>
    </div>

    <div className='board-lists'>
        {/* <Link to="/freeboarddetail">디테일</Link> */}

        {boards.map((board) => (
        <Link key={board.id} to={`/freeboarddetail/${board.id}`}>
            {board.title}
        </Link>
    ))}
    </div>

    </div>
  )
}

export default FreeBoard