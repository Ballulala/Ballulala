import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Team.css';
import TopNavbar from '../top_navbar/TopNavbar';
// import { fetchTeams } from './TeamAPI';
import { teamDetailData } from './TeamDummyData';

function Team() {
  const [team, setTeam] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const [teams, setTeams] = useState(teamDetailData);

  const [showModal, setShowModal] = useState(false);
  const [showRegions, setShowRegions] = useState(false);
  const [showMmrs, setShowMmrs] = useState(false);

  const addTeam = () => {
    const newTeam = {
      team_id: (Math.random() * 1000000).toFixed(0), // 임의로 생성한 팀 ID입니다. 실제로는 다른 방식으로 ID를 할당해야 합니다.
      logo: URL.createObjectURL(image),
      name: name,
      gugun: "",
      sido: location,
      lose_count: 0,
      mmr: 0,
      point: 0,
      win_count: 0,
      winning_streak: 0,
      description: statusMsg,
      member_count: 0,
      mojib: 0,
    };
  
    // 기존의 팀 목록에 새로운 팀을 추가합니다.
    setTeams([...teams, newTeam]);
  };
  
  const handleSubmit = () => {
    console.log('Form submitted');
    console.log('Image file:', image.name);
    addTeam(); // 팀 데이터 추가합니다.
  };
  
  
  const { teamId } = useParams();

  useEffect(() => {
    const foundTeam = teamDetailData.find((t) => t.team_id === teamId);
    if (foundTeam) {
      setTeam(foundTeam);
    }
  }, [teamId]);

  
  // api 생성 이후

  // const [teams, setTeams] = useState(null);

  // useEffect(() => {
  //   const loadTeams = async () => {
  //     const fetchedTeams = await fetchTeams();
  //     setTeams(fetchedTeams);
  //   };

  //   loadTeams();
  // }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <div className="team-page">
      <TopNavbar/>
      <div className="page-letter">TEAM</div>

      <Link to="/teamdetail">
        <img className="month-team-img" src="month_team.png" alt="Month Team" />
      </Link>

      {/* 지역별 버튼 리스트. 원하는 지역명으로 변경하고 해당 지역의 페이지 경로를 설정하세요. */}
      <div className="search-team">
        <div className="buttons">
          <div className="region-container">
            <button 
            className="radius-button"
            onClick={() => setShowRegions(!showRegions)}
            >지역별
            　▼
            </button>
            {showRegions && (
                <div className="region-list">
                  <button>서울</button>
                  <button>대구</button>
                  {/* 추가로 지역 버튼을 넣고 싶으시면 여기에 추가하시면 됩니다. */}
                </div>
              )}
            </div>
            <button className="radius-button">멤버 모집중</button>
          <div className="region-container">
          <button 
            className="radius-button"
            onClick={() => setShowMmrs(!showMmrs)}
            >mmr　▼
            </button>
            {showMmrs && (
                <div className="region-list">
                  <button>10</button>
                  <button>20</button>
                  {/* 추가로 지역 버튼을 넣고 싶으시면 여기에 추가하시면 됩니다. */}
                </div>
              )}
          </div>
        </div>
        <div className="team-search-box">
          <label htmlFor="email"></label>
          <input
            type="team"
            id="team"
            placeholder="팀 이름 검색"
            value={team}
            onChange={(event) => setTeam(event.target.value)}
          />
        </div>
      </div>

    
      {/* 여기에 전체 팀 리스트를 추가하세요. */}
      {/* <div className="team-list">
        <ul>
          {teams && teams.map((team) => (
            <li key={team.team_id}>
              <Link to={`/teamdetail/${team.team_id}`}>{team.name}</Link>
            </li>
          ))}
        </ul>
      </div> */}

      <div className='team-list'>
      <ul>
        {teams.map((team) => (
          <li key={team.team_id} className='team-item'>
            <div className='team-item-one'>
              <Link to={`/teamdetail/${team.team_id}`}>
                <img src={team.logo} alt={team.name + " 로고"} />
                </Link>
            </div>
            <div className='team-item-two'>
              <Link to={`/teamdetail/${team.team_id}`}>
                {team.name}
              </Link>
              <div>{team.sido} {team.gugun}</div>
            </div>
          </li>
        ))}
      </ul>
      </div>


      
       <div className="new-team-btn-container">
        <button className="new-team-btn" onClick={openModal}>
          새로운 팀 만들기
        </button>
      </div>

      {showModal && (
        <div className="ball-modal">
          <div className="ball-modal-content">
            <div className="ball-modal-title">
              <div>팀 등록하기</div>
              <br/>
            </div>

            <div>
              <label htmlFor="image">로고</label>
              <br/>
              <input
                type="file"
                id="image"
                onChange={(event) => setImage(event.target.files[0])}
              />
              <br />
              <br/>
              <label htmlFor="name">팀 이름</label>
              <br />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className='modal-input'
              />
              <br />
              <br/>
              <label htmlFor="location">위치</label>
              <br />
              <input
                type="text"
                id="location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                className='modal-input'
              />
              <br />
              <br/>
              <label htmlFor="statusMsg">소개 (선택)</label>
              <br />
              <input
                type="text"
                id="statusMsg"
                value={statusMsg}
                onChange={(event) => setStatusMsg(event.target.value)}
                className='modal-input'
              />
            </div>

            <div className="modal-btns" style={{ marginTop: '10%' }}>
              <button
                className="modal-no-btn"
                type="button"
                onClick={() => {
                  closeModal();
                }}
              >
                취소
              </button>

              <button
                className="modal-yes-btn"
                type="button"
                onClick={() => {
                  handleSubmit();
                  closeModal();
                }}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;
