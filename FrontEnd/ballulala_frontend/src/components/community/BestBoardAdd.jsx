import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TopNavbar from '../top_navbar/TopNavbar';

function BestBoardAdd() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const { boardID } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      userId: 1,
      title: title,
      content: content,
      videoLink: videoLink,
    };

    try {
      const response = await axios.post('https://i9d110.p.ssafy.io:8081/highlight/add', postData);
      console.log(response);
      const newBoardID = response.data.boardID + 1;
      navigate(`/bestboard/${newBoardID}`);
      navigate(`/bestboard`);
    } catch (error) {
      console.error('작성 에러:', error);
    }
  };

  return (
    <div className='board-add-page'>
      <TopNavbar />
      <div className='board-page-letter'>명예의 전당 작성</div>
      <form onSubmit={handleSubmit} className='board-form'>
        <div>
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
          <label htmlFor='videoLink' className='board-input-letter'>
            비디오 링크
          </label>
          <br />
          <input
            className='board-input-box'
            type='text'
            id='videoLink'
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />
        </div>
        <div className='board-btn-wrap'>
          <button type='submit' className='board-btn'>
            작성하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default BestBoardAdd;
