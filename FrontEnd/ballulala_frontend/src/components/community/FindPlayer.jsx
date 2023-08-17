import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TopNavbar from '../top_navbar/TopNavbar';

function FindPlayer() {
    const [boards, setBoards] = useState([]);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/findplayer/add');
    };

    const coverImagePath = process.env.PUBLIC_URL + "/images/img_stadium_4.png";

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const response = await axios.get('https://i9d110.p.ssafy.io:8081/mercenary/list'); // 수정이 필요한 API 주소입니다.
                console.log('Response data:', response.data);
                setBoards(response.data.mercenaryList); // 필요한 경우 response 경로에 따른 수정이 필요합니다.
            } catch (error) {
                console.error('Failed to fetch boards:', error);
            }
        };

        fetchBoards();
    }, []);

    return (
        <div className='board-page'>
            <TopNavbar />

            <div
                className="image-container sliding-image"
                style={{ backgroundImage: `url(${coverImagePath})` }}
            >
                <div className="rank-text">
                    <div>용병 모집</div>
                </div>
            </div>

            <div className='community-nav'>
    <div className='board-category buttons'>
        <Link to="/freeboard">
            <button className='radius-btn'>자유게시판</button>
        </Link>
        
        <Link to="/findplayer">
            <button className='radius-btn-selected'>용병 모집</button>
        </Link>

    </div>

    <div className="board-search-box">
        <label htmlFor="board"></label>
        <input
        type="board"
        id="board"
        placeholder="검색"
        // value={board}
        // onChange={(event) => setBoard(event.target.value)}
        />
    </div>
    </div>

    <div className="board-container">
      <button className='board-add-btn' onClick={handleClick}>새 글 작성하기</button>
    </div>


            {/* 게시물 목록 */}
            <div className='board-lists'>
                {boards.map((board) => (
                    <Link
                        key={board.id}
                        to={{
                            pathname: `/findplayer/${board.id}`,
                            state: {
                                createTime: board.createTime,
                                nickname: board.nickname,
                            },
                        }}
                        className='board-item'
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
    );
}

export default FindPlayer;
