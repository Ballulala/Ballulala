import React from 'react'
import './FreeBoardDetail.css';
import TopNavbar from '../top_navbar/TopNavbar';

function FreeBoardDetail() {
  return (
    <div className='board-detail-page'>
        <TopNavbar/>
        <div className='board-detail'>
            <div className='board-title'>글 제목</div>
            <div style={{marginBottom: "10px"}}>작성자</div>
            <div>작성일</div>
            <hr/>
            <div className='detail-line-one'>
                <img src={'/images/like.png'} alt='like' />
                <div>좋아요 수</div>
                <img src={'/images/comment.png'} alt='like' />
                <div>댓글 수</div>
            </div>
            <hr/>
            <div className='detail-line-two'>
                글 내용
            </div>

            <div className='detail-line-three'>
                <div>
                <img src={'/images/like.png'} alt='like'/>
                <button className='like-btn'>좋아요/좋아요 취소</button>
                </div>
                <div className='detail-btns'>
                    <button>수정</button>
                    <button>삭제</button>
                </div>
            </div>
            <hr/>
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
    </div>
  )
}

export default FreeBoardDetail