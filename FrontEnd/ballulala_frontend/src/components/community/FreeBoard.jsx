import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './FreeBoard.css';
import TopNavbar from '../top_navbar/TopNavbar';
import axios from 'axios';

function FreeBoard() {
    const [boards, setBoards] = useState([]);
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/freeboard/add');
    };

    const coverImagePath = process.env.PUBLIC_URL + "/images/img_stadium_7.jpg";

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

    <div className="board-container">
      <button className='board-add-btn' onClick={handleClick}>새 글 작성하기</button>
    </div>

    <div className='board-lists'>

        {boards.map((board) => (
          <Link
  key={board.id}
  to={{
    pathname: `/freeboard/${board.id}`,
    state: {
      createTime: board.createTime,
      nickname: board.nickname,
    },
  }}
  className="board-item"
>
  <div className='free-board-title'>
  {board.title}
  </div>
  <div>
  {board.createTime.slice(0, 10)}　·　
  {board.nickname}
  </div>
</Link>

))}


    </div>

    </div>
  )
}

export default FreeBoard