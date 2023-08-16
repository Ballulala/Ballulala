import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TopNavbar from '../top_navbar/TopNavbar';

function FindPlayerDetail() {
  const [findPlayer, setFindPlayer] = useState(null);
  const { boardID } = useParams();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false); 

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editingComment, setEditingComment] = useState(null);
  const [editedComment, setEditedComment] = useState('');

  useEffect(() => {
    const fetchFindPlayer = async () => {
      try {
        const response = await axios.get(`https://i9d110.p.ssafy.io:8081/mercenary/detail/${boardID}`);
        setFindPlayer(response.data.mercenary);
        console.log('받아온 게시글 데이터:', response.data.mercenary); // 받아온 데이터 확인
      } catch (error) {
        console.error('데이터 가져오기 에러:', error);
        console.log(boardID)
      }
    };

    fetchFindPlayer();
  }, [boardID]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://i9d110.p.ssafy.io:8081/mercenary/delete/${boardID}`);
      console.log('게시글이 삭제되었습니다.');
      navigate('/findplayer'); // 삭제 후 이전 페이지로 이동, 원하는 경로를 지정하세요
    } catch (error) {
      console.error('게시글 삭제 에러:', error);
    }
    handleClose();
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`https://i9d110.p.ssafy.io:8081/mercenaryreply/list/${boardID}`);
        setComments(Array.isArray(response.data.replyList) ? response.data.replyList : []);
      } catch (error) {
        console.error('댓글 목록 에러:', error);
      }
    };
    fetchComments();
  }, [boardID]);

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    try {
      const userId = 1;

      await axios.post('https://i9d110.p.ssafy.io:8081/mercenaryreply/add', {
        content: newComment,
        userId: userId,
        board: boardID,
      });

      setNewComment('');
      const response = await axios.get(`https://i9d110.p.ssafy.io:8081/mercenaryreply/list/${boardID}`);
      setComments(response.data.replyList);
    } catch (error) {
      console.error('댓글 작성 에러:', error);
    }
  };

  function handleEditComment(comment) {
    setEditingComment(comment);
    setEditedComment(comment.content);
  }

  async function handleUpdateComment(e) {
    e.preventDefault();

    try {
      await axios.put(`https://i9d110.p.ssafy.io:8081/mercenaryreply/modify/${editingComment.id}`, {
        content: editedComment,
      });

      const response = await axios.get(`https://i9d110.p.ssafy.io:8081/mercenaryreply/list/${boardID}`);
      setComments(response.data.replyList);
      setEditingComment(null);
      setEditedComment('');
    } catch (error) {
      console.error("댓글 수정 에러:", error);
    }
  }

  async function handleDeleteComment(commentID) {
    try {
      await axios.delete(`https://i9d110.p.ssafy.io:8081/mercenaryreply/delete/${commentID}`);

      const response = await axios.get(`https://i9d110.p.ssafy.io:8081/mercenaryreply/list/${boardID}`);
      setComments(response.data.replyList);
    } catch (error) {
      console.error("댓글 삭제 에러:", error);
    }
  }

  return (
    <div className='board-detail-page'>
      <TopNavbar />
      {findPlayer ? (
        <div className='board-detail'>

          <div className='board-title'>{findPlayer.title}</div>
          <div style={{ marginBottom: '10px' }}>작성자</div>
          <div>작성시간</div>
          <hr />
          <div className='detail-line-one'>
            <img src={'/images/like.png'} alt='like' />
            <div>좋아요 수</div>
            <img src={'/images/comment.png'} alt='like' />
            <div>{comments.length}</div>
          </div>
          <hr />
          <div className='detail-line-two'>{findPlayer.content}</div>

          <div className='detail-line-three'>
          <div>
            <img src={'/images/like.png'} alt='like' />
            <button className='like-btn'>좋아요/좋아요 취소</button>
          </div>

          <div className='detail-btns'>
            <Link
              to={{
                pathname: `/findplayer/modify/${boardID}`,
                // state: {
                //   createTime: mercenary.createTime,
                //   nickname: mercenary.nickname,
                //   },
              }}
            >
              <button className='detail-btns-btn'>수정</button>
            </Link>
            <button className='detail-btns-btn' onClick={handleShow}>삭제
            </button>

            {
  showModal && (
    <div className='ball-modal'>
      <div className='ball-modal-content'>
        <div>정말로 삭제하시겠습니까?</div>

        <div className='modal-btns'>
          <button 
          className="modal-no-btn" 
          type="button" 
          onClick={handleClose}>
              취소
            </button>

            <button
              className="modal-yes-btn"
              type="button"
              onClick={handleDelete}
            >
              삭제
            </button>
            </div>
      </div>
    </div>
  )
}
            
         </div>
        </div>
        <hr />

        <div className='detail-line-four'>
            <div className='detail-line-one'>
              <img src={'/images/comment.png'} alt='like' />
              {/* <div>댓글 수</div> */}
              <div>{comments.length}</div>
            </div>

            <form onSubmit={handleSubmitComment} className='comment-add-form'>
              <input
                className='comment-add'
                type='text'
                placeholder='댓글 작성'
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button className='detail-btns-btn' type='submit'>댓글 작성</button>
            </form>

            <div className='comments'>
              {comments.map((comment) => (
                <div key={comment.id} className="comment-item">
                  <div className='comment-item-one'>
                    <span>{comment.nickname}</span>
                  </div>
                  <div className='comment-item-two'>
                    <span className="comment-content">{comment.content}</span>
                  </div>
                  <div className='comment-item-three'>
                    <button className="comment-edit-btn" onClick={() => handleEditComment(comment)}>
                      수정
                    </button>
                    <button className="comment-delete-btn" onClick={() => handleDeleteComment(comment.id)}>
                      삭제
                    </button>
                  </div>
                </div>
              ))}
            </div>


            {editingComment ? (
              <div className="ball-modal">
                <form onSubmit={handleUpdateComment} className="ball-modal-content">
                  <div className="ball-modal-title">
                    <div>댓글 수정</div>
                  </div>
                  <input
                  className="comment-edit-input"
                  type="text"
                  value={editedComment}
                  onChange={(e) => setEditedComment(e.target.value)}
                  style={{ marginTop: "20px", marginBottom: "30px" }}
                />

                  <div className="modal-btns">
                    <button className="modal-yes-btn" type="submit">
                      수정 완료
                    </button>
                    <button className="modal-no-btn" onClick={() => setEditingComment(null)}>
                      취소
                    </button>
                  </div>
                </form>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className='loading-message'>데이터를 가져오는 중입니다...</div>
      )}
    </div>
  );
}

export default FindPlayerDetail;

