import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TopNavbar from '../top_navbar/TopNavbar';

function FindPlayerModify() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { boardID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFindPlayerData = async () => {
      try {
        const response = await axios.get(`https://i9d110.p.ssafy.io:8081/mercenary/detail/${boardID}`);
        
        const boardData = response.data.mercenary;
        
        setTitle(boardData.title);
        setContent(boardData.content);
      } catch (error) {
        console.error('데이터 가져오기 에러:', error);
      }
    };

    fetchFindPlayerData();
  }, [boardID]);

  const handleModify = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://i9d110.p.ssafy.io:8081/mercenary/modify/${boardID}`, 
      {
        title,
        content
      });

      navigate(`/findplayer/${boardID}`);
    } catch (error) {
      console.error('게시글 수정 에러:', error);
    }
  };

  return (
    <div className='board-add-page'>
      <TopNavbar />
      <div className='board-page-letter'>용병 게시판 수정</div>
      <form onSubmit={handleModify} className='form'>
        <div>
          <label htmlFor="title" className='input-letter'>제목</label>
          <br />
          <input
            className='board-input-box'
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content" className='input-letter'>내용</label>
          <br />
          <textarea
            className='board-input-box'
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <div className='board-btn-wrap'>
          <button type="submit" className='board-btn'>수정하기</button>
        </div>
      </form>
    </div>
  );
}

export default FindPlayerModify;
