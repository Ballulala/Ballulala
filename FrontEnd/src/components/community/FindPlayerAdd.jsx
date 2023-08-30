import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TopNavbar from '../top_navbar/TopNavbar';

function FindPlayerAdd() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post('https://i9d110.p.ssafy.io:8081/mercenary/add', {
                userId: 1,    
                title,
                content
            });
            navigate('/findplayer');
        } catch (error) {
            console.error('Failed to add post:', error);
        }
    };

    return (
        <div className='board-page'>
            <TopNavbar />

            <div className='board-page-letter'>용병 모집 글 작성</div>
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

export default FindPlayerAdd;
