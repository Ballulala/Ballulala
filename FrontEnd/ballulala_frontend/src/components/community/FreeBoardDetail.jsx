import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FreeBoardDetail.css';
import TopNavbar from '../top_navbar/TopNavbar';
import { tokenState } from '../../atoms/token';
import { useRecoilValue } from "recoil";


function FreeBoardDetail() {
  const [freeBoard, setFreeBoard] = useState(null);
  const { boardID } = useParams();
  const navigate = useNavigate();
  const [authority, setAuthority] = useState(null);
  const [currentUserID, setCurrentUserID] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editingComment, setEditingComment] = useState(null);
  const [editedComment, setEditedComment] = useState('');

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const token = useRecoilValue(tokenState);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get('https://i9d110.p.ssafy.io:8081/users/myInfo', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        setCurrentUser(response.data.user);
      } catch (error) {
        console.error('현재 사용자 정보 가져오기 에러:', error);
      }
    };
  
    fetchCurrentUser();
  }, [token]);
  

  useEffect(() => {
    const fetchFreeBoard = async () => {
      try {
        const response = await axios.get(`https://i9d110.p.ssafy.io:8081/freeboard/detail/${boardID}`, {
          headers: { Authorization: `Bearer ${token}` }, // 헤더에 토큰 추가
        });
        setFreeBoard(response.data.freeBoard);
        setAuthority(response.data.authority); // authority 값을 state에 저장
        // setCurrentUserID(response.data.freeBoard.userNo); // 현재 사용자의 ID를 state에 저장
        // console.log(response.data.freeBoard.userNo)
        // console.log(response.data)
      } catch (error) {
        console.error('데이터 가져오기 에러:', error);
      }
    };
    fetchFreeBoard();
  }, [boardID, token]);
  
  
  useEffect(() => {
    console.log(token)
    const fetchComments = async () => {
      try {
        const response = await axios.get(`https://i9d110.p.ssafy.io:8081/freeboardreply/list/${boardID}`);
        setComments(Array.isArray(response.data.replyList) ? response.data.replyList : []);
      } catch (error) {
        console.error('댓글 가져오기 에러:', error);
      }
    };
    fetchComments();
  }, [boardID]);
  

  const handleSubmitComment = async (e) => {    
    e.preventDefault(); 
   
   try {      
   await axios.post(        
   'https://i9d110.p.ssafy.io:8081/freeboardreply/add',        
   {          
   content: newComment,
   board: boardID,
           },
           {          
   headers: { Authorization:`Bearer ${token}` }, // 헤더에 토큰 추가       
   }
   );
   
   setNewComment('');
   const response=await axios.get(`https://i9d110.p.ssafy.io:8081/freeboardreply/list/${ boardID }`);
   setComments(response.data.replyList);    
   } catch(error){      
   console.error('데이터 작성 에러:', error);   
   }
   };
   
  const handleDelete = async () => {
    try {
      await axios.delete(`https://i9d110.p.ssafy.io:8081/freeboard/delete/${boardID}`);
      navigate('/freeboard');
    } catch (error) {
      console.error("게시글 삭제 에러:", error);
    }
  };

  function handleEditComment(comment) {
    setEditingComment(comment);
    setEditedComment(comment.content);
  }

  async function handleUpdateComment(e) {
    e.preventDefault();

    try {
      await axios.put(`https://i9d110.p.ssafy.io:8081/freeboardreply/modify/${editingComment.id}`, {
        content: editedComment,
      }, {
        headers: { Authorization: `Bearer ${token}` }, // 헤더에 토큰 추가
      });

      const response = await axios.get(`https://i9d110.p.ssafy.io:8081/freeboardreply/list/${boardID}`);
      setComments(response.data.replyList);
      setEditingComment(null);
      setEditedComment('');
    } catch (error) {
      console.error("댓글 수정 에러:", error);
    }
  }


  async function handleDeleteComment(commentID) {
    try {
      await axios.delete(`https://i9d110.p.ssafy.io:8081/freeboardreply/delete/${commentID}`);

      const response = await axios.get(`https://i9d110.p.ssafy.io:8081/freeboardreply/list/${boardID}`);
      setComments(response.data.replyList);
    } catch (error) {
      console.error("댓글 삭제 에러:", error);
    }
  }

  return (
    <div className='board-detail-page'>
      <TopNavbar />
      {freeBoard ? (
        <div className='board-detail'>

        <div className='board-title'>{freeBoard.title}</div>

        <div style={{ marginBottom: '10px' }}>{freeBoard.nickname}</div>
        <div>{freeBoard.createTime.slice(0, 10)}</div>
        <hr />

        <div className='detail-line-two'>{freeBoard.content}</div>

        <div className='detail-line-three'>
  <>
    <div>
    </div>

    <div>
      {authority === "작성자" && (
        <div className="detail-btns">
          <Link
            to={{
              pathname: `/freeboard/modify/${boardID}`,
              state: {
                createTime: freeBoard.createTime,
                nickname: freeBoard.nickname,
              },
            }}
          >
            <button className="detail-btns-btn">수정</button>
          </Link>
          <button className="detail-btns-btn" onClick={handleShow}>
            삭제
          </button>
        </div>
      )}
    </div>
  </>

  {
    showModal && (
      <div className='ball-modal'
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
      }}>
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
                placeholder='댓글 내용을 작성하세요.'
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
                {/* {comment.userId === currentUserID && ( */}
                {currentUser && comment.userId === currentUser.id && (
                  <>
                    <button className="comment-edit-btn" onClick={() => handleEditComment(comment)}>
                      수정
                    </button>
                    <button className="comment-delete-btn" onClick={() => handleDeleteComment(comment.id)}>
                      삭제
                    </button>
                  </>
      )}
    </div>
  </div>
))}

            </div>


            {editingComment && (
  <div
    className="ball-modal"
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1000,
    }}
  >
    <form
      onSubmit={handleUpdateComment}
      className="ball-modal-content"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="ball-modal-title">
        <div>댓글 수정</div>
      </div>
      <input
        className="comment-edit-input"
        type="text"
        value={editedComment}
        onChange={(e) => setEditedComment(e.target.value)}
        style={{
          marginTop: "20px",
          marginBottom: "30px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
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
)}

          </div>
        </div>
      ) : (
        <div className='loading-message'>데이터를 가져오는 중입니다...</div>
      )}
    </div>
  );
}

export default FreeBoardDetail;