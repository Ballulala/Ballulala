import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './FreeBoardDetail.css';
import TopNavbar from '../top_navbar/TopNavbar';

function FreeBoardDetail() {
  const [freeBoard, setFreeBoard] = useState(null);
  const { boardID } = useParams();

  console.log('boardID 값:', boardID);

  useEffect(() => {
    const fetchFreeBoard = async () => {
      try {
        const response = await axios.get(`https://i9d110.p.ssafy.io:8081/freeboard/detail/${boardID}`);
        setFreeBoard(response.data.freeBoard);
        console.log('받아온 게시글 데이터:', response.data.freeBoard); // 받아온 데이터 확인
      } catch (error) {
        console.error('데이터 가져오기 에러:', error);
        // 에러 처리
      }
    };

    fetchFreeBoard();
  }, [boardID]);

  return (
    <div className='board-detail-page'>
      <TopNavbar />
      {freeBoard ? (
        <div className='board-detail'>
          <div className='board-title'>{freeBoard.title}</div>

          <div style={{ marginBottom: '10px' }}>작성자</div>
          <div>작성일</div>
          <hr />
          <div className='detail-line-one'>
            <img src={'/images/like.png'} alt='like' />
            <div>좋아요 수</div>
            <img src={'/images/comment.png'} alt='like' />
            <div>댓글 수</div>
          </div>
          <hr />
          <div className='detail-line-two'>{freeBoard.content}</div>

          <div className='detail-line-three'>
            <div>
              <img src={'/images/like.png'} alt='like' />
              <button className='like-btn'>좋아요/좋아요 취소</button>
            </div>
            <div className='detail-btns'>
              <button>수정</button>
              <button>삭제</button>
            </div>
          </div>
          <hr />
          <div className='detail-line-four'>
            <div className='detail-line-one'>
              <img src={'/images/comment.png'} alt='like' />
              <div>댓글 수</div>
            </div>
            <div className='comments'>
              <div>댓글 내용</div>
            </div>
          </div>
        </div>
      ) : (
        <div className='loading-message'>데이터를 가져오는 중입니다...</div>
      )}
    </div>
  );
}

export default FreeBoardDetail;
