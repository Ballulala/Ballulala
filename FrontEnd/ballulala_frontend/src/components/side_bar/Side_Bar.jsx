import React, { useState } from "react";
import "./Side_Bar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleSidebar}>
        {isOpen ? "X" : <i className="fas fa-bars"></i>}
      </button>
      {isOpen && (
        <div className="sidebar">
          <ul>
            <li>
              <a href="#service">서비스 소개</a>
            </li>
            <li>
              <a href="#partnership">구장 제휴</a>
            </li>
            <li>
              <a href="#notice">공지사항</a>
            </li>
            <li>
              <a href="#faq">자주 묻는 질문</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
