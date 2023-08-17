import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomeNavbar2.css";

function HomeNavbar2() {
  const [activeMenu, setActiveMenu] = useState(null);

  const createSubMenuContent = (menuId) => {
    const subMenuContent = {
      match: [
        { label: "팀 매칭", link: "/Match_team" },
        { label: "개인 (준비중)", link: "/Match_individual" },
      ],
      rank: [
        { label: "팀 랭킹", link: "/teamrank" },
        { label: "개인 (준비중)", link: "/userrank" },
      ],
      team: [{ label: "전체 팀 보기", link: "/team" }],
      community: [
        { label: "자유게시판", link: "/freeboard" },
        // { label: "명예의 전당", link: "/bestboard" },
        { label: "용병 모집", link: "/findplayer" },
        // { label: "컨설팅", link: "/consulting" },
      ],
    };

    return subMenuContent[menuId];
  };

  const handleClick = (menuId) => {
    if (activeMenu === menuId) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuId);
    }
  };

  const menuItems = [
    { id: "match", label: "MATCH" },
    { id: "rank", label: "RANK" },
    { id: "team", label: "TEAM" },
    { id: "community", label: "COMMUNITY" },
  ];

  return (
    <div className="nav-seul">
      <Link to="/" className="link-no-line">
        <div className="nav-one">BALLULALA</div>
      </Link>
      <div className="nav-two">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`menu-item${activeMenu === item.id ? " active" : ""}`}
          >
            {item.label}
            <i
              className={`fas fa-chevron-right${
                activeMenu === item.id ? " aqua" : ""
              }`}
            />
            {activeMenu === item.id && (
              <div
                className={`sub-menu${activeMenu === item.id ? " active" : ""}`}
              >
                {createSubMenuContent(item.id).map((subMenuItem, index) => (
                  <Link key={index} to={subMenuItem.link}>
                    <div>{subMenuItem.label}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeNavbar2;
