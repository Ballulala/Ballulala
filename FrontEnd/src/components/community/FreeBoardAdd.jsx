import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FreeBoardAdd.css';
import TopNavbar from '../top_navbar/TopNavbar';
import { tokenState } from '../../atoms/token';
import { useRecoilValue } from "recoil";

function FreeBoardAdd() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const token = useRecoilValue(tokenState);

  useEffect(() => {
    const fetchBoards = async () => {
        try {
            console.log(token);
            console.log('토큰')
            const response = await axios.post('https://i9d110.p.ssafy.io:8081/freeboard/add', {
              headers: {'Authorization': `Bearer ${token}`}
            });
            
           console.log("Response data:", response.data);
       } catch (error) {
           console.error('Failed to fetch boards:', error);
       }
   };

   fetchBoards();

}, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title: title,
      content: content
    };

    try {
      const response = await axios.post('https://i9d110.p.ssafy.io:8081/freeboard/add', postData, {
  headers: { Authorization: `Bearer ${token}` },
});

      console.log(response);
      const newBoardID = response.data.boardID + 1
      navigate(`/freeboard/${newBoardID}`);
      navigate(`/freeboard`);
    } catch (error) {
      console.error('작성 에러:', error);
    }
    
  };

  return (
    <div className='board-add-page'>
        <TopNavbar/>
      <div className='board-page-letter'>자유게시판 작성</div>
      <form onSubmit={handleSubmit} className='board-form'>
        <div>
          <label htmlFor="title" className='board-input-letter'>제목</label>
          <br/>
          <input
            className='board-input-box'
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content" className='board-input-letter'>내용</label>
          <br/>
          <textarea
            className='board-input-box'
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <div className='board-btn-wrap'>
          <button type="submit" className='board-btn'>작성하기</button>
        </div>
      </form>
    </div>
  );
}

export default FreeBoardAdd;
