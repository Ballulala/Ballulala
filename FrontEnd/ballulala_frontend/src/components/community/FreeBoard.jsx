import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './FreeBoard.css';
import TopNavbar from '../top_navbar/TopNavbar';
import axios from 'axios';

function FreeBoard() {
    const [boards, setBoards] = useState([]);

    const coverImagePath = process.env.PUBLIC_URL + "/images/img_stadium_2.jpg";

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

              <div
        className="image-container sliding-image"
        style={{ backgroundImage: `url(${coverImagePath})` }}
      >
        <div className="rank-text">
            <div>자유게시판</div>
        </div>
      </div>

    <div className='community-nav'>
    <div className='board-category buttons'>
        <Link to="/freeboard">
            <button className='radius-btn-selected'>자유게시판</button>
        </Link>

        <Link to="/bestboard">
            <button className='radius-btn'>명예의 전당</button>
        </Link>
        
        <Link to="/findplayer">
            <button className='radius-btn'>용병 모집</button>
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
        // value={board}
        // onChange={(event) => setBoard(event.target.value)}
        />
    </div>
    </div>

    <div className='board-lists'>
        <Link to="/freeboarddetail">디테일</Link>
        <Link to="/freeboard/add">작성</Link>

        {boards.map((board) => (
        <Link key={board.id} to={`/freeboard/${board.id}`} className="board-item">
            {board.title}
            {/* {board.id} */}
        </Link>
    ))}
    </div>

    </div>
  )
}

export default FreeBoard