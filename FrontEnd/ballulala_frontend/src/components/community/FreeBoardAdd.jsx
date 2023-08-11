import React, { useState } from 'react';
import axios from 'axios';
import './FreeBoardAdd.css';
import TopNavbar from '../top_navbar/TopNavbar';

function FreeBoardAdd() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      userId: 1, // 아직 구현 X. 임시로 1로 작성
      title: title,
      content: content
    };

    try {
      const response = await axios.post('https://i9d110.p.ssafy.io:8081/freeboard/add', postData);
      console.log(response.data);
      // 성공 시 리다이렉트, 상태 업데이트 등 필요한 작업 수행
      // 디테일 페이지로 디라이렉트 작성 필요
    } catch (error) {
      console.error('작성 에러:', error);
      // 에러 처리
    }
  };

  return (
    <div className='board-add-page'>
        <TopNavbar/>
      <div className='board-page-letter'>자유게시판 작성</div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FreeBoardAdd;
