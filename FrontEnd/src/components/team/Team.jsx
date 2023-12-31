import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Team.css';
import TopNavbar from '../top_navbar/TopNavbar';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { getRegionName } from "../function/getRegionName";
import useRegionFilter from '../hooks/useRegionFilter';
import { tokenState } from '../../atoms/token';
import { useRecoilValue } from "recoil";

function Team() {
  const coverImagePath = process.env.PUBLIC_URL + "/images/img_stadium_5.jpg";
  const navigate = useNavigate();

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [gugun, setGugun] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const [team, setTeam] = useState(null);
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [showRegions, setShowRegions] = useState(false);
  const [showMmrs, setShowMmrs] = useState(false);
  const [minMmr, setMinMmr] = useState(null);


  const { teamId } = useParams();

  const token = useRecoilValue(tokenState);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        console.log('토큰 값 :');
        console.log(token)
        const response = await axios.get(
          "https://i9d110.p.ssafy.io:8081/teams/list"
        );
        const matchList = response.data.matchList;
        setTeams(response.data.matchList);
        setTeam(matchList.find((t) => t.id === parseInt(teamId)));
      } catch (error) {
        console.error("팀 데이터를 가져오는데 실패했습니다:", error);
      }
    };

    fetchTeams();
  }, [teamId]);

  useEffect(() => {
    setFilteredTeams(teams);
  }, [teams]);

  const { filterByGugun, clearFilter } = useRegionFilter(teams, filteredTeams, setFilteredTeams);

  useEffect(() => {
    if (minMmr) {
      setFilteredTeams(teams.filter((team) => team.mmr >= minMmr));
    } else {
      setFilteredTeams(teams);
    }
  }, [teams, minMmr]);
  
  

  const addTeam = async () => {
    if (image) {
      const formData = new FormData();
      formData.append("logo", image);
      formData.append("name", name);
      formData.append("gugun", gugun);
      formData.append("description", statusMsg);
  
      try {
        const response = await axios.post(
          "https://i9d110.p.ssafy.io:8081/teams/add",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${token}`,
            },
          }
        );
        console.log("Form submitted:", response.data);
        setTeams([...teams, response.data]);
        setTeam(response.data); 
        navigate(`/`); 
      } catch (error) {
        console.error("Error submitting the form:", error);
      }

    } else {
      const requestBody = {
        name,
        gugun,
        description: statusMsg
      }
  
      try {
        const response = await axios.post(
          "https://i9d110.p.ssafy.io:8081/teams/add",
          requestBody,
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          }
        );
        
        console.log("Form submitted:", response.data);
        setTeams((prevTeams) => {
          const updatedTeams = [...prevTeams, response.data];
          setTeam(response.data);
          navigate(`/`); 
          return updatedTeams;
        });
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    }
    };

  
  

  const handleSubmit = async () => {
    console.log('Form submitted');
    await addTeam();
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <div className="team-page">
      <TopNavbar/>

      <div
        className="image-container sliding-image"
        style={{ backgroundImage: `url(${coverImagePath})` }}
      >
        <div className="rank-text">TEAM</div>
      </div>

      <div className="search-team">
        <div className="buttons">
          <div className="region-container">
            <button 
            className="radius-btn"
            onClick={() => setShowRegions(!showRegions)}
            >지역별
            　▼
            </button>
            {showRegions && (
              <div className="region-list">
                  <button onClick={() => clearFilter()}>전체 지역</button>
                  <button onClick={() => filterByGugun(0)}>서울</button>
                  <button onClick={() => filterByGugun(1)}>경기</button>
                  <button onClick={() => filterByGugun(2)}>인천</button>
                  <button onClick={() => filterByGugun(3)}>강원</button>
                  <button onClick={() => filterByGugun(4)}>대구</button>
                  <button onClick={() => filterByGugun(5)}>대전</button>
                  <button onClick={() => filterByGugun(6)}>경남</button>
                  <button onClick={() => filterByGugun(7)}>경북</button>
                  <button onClick={() => filterByGugun(8)}>부산</button>
                  <button onClick={() => filterByGugun(9)}>울산</button>
                  <button onClick={() => filterByGugun(10)}>광주</button>
                  <button onClick={() => filterByGugun(11)}>제주</button>
                  <button onClick={() => filterByGugun(12)}>전남</button>
                  <button onClick={() => filterByGugun(13)}>전북</button>
                  <button onClick={() => filterByGugun(14)}>충남</button>
                  <button onClick={() => filterByGugun(15)}>충북</button>
                </div>
              )}
            </div>

          <div className="region-container">
          <button 
            className="radius-btn"
            onClick={() => setShowMmrs(!showMmrs)}
            >mmr　▼
            </button>
            {showMmrs && (
                <div className="region-list">
                  <button onClick={() => setMinMmr(null)}>전체 mmr</button>
                  <button onClick={() => setMinMmr(1000)}>1000 ▲</button>
                  <button onClick={() => setMinMmr(1100)}>1100 ▲</button>
                  <button onClick={() => setMinMmr(1200)}>1200 ▲</button>
                </div>
              )}
          </div>
          
        </div>
        <div className="team-search-box">
        <button className="new-team-btn" onClick={openModal}>
            새로운 팀 만들기
          </button>
        </div>

        
      </div>



        {showModal && (
          <div className="ball-modal">
            <div className="ball-modal-content">
              <div className="ball-modal-title">
                <div>팀 등록하기</div>
                <br/>
              </div>

              <div>

                <br/>
                <div className="inputbox">
                <label htmlFor="name">팀 이름</label>
                <br />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className='modal-input'
                /></div>

                <br />
<label htmlFor="gugun">지역</label>
<br />
<select
  className="inputbox selectbox"
  id="gugun"
  value={gugun}
  onChange={(event) => setGugun(event.target.value)}
>
  <option value="">시/도</option>
  <option value="0">서울</option>
  <option value="1">경기</option>
  <option value="2">인천</option>
  <option value="3">강원</option>
  <option value="4">대구</option>
  <option value="5">대전</option>
  <option value="6">경남</option>
  <option value="7">경북</option>
  <option value="8">부산</option>
  <option value="9">울산</option>
  <option value="10">광주</option>
  <option value="11">제주</option>
  <option value="12">전남</option>
  <option value="13">전북</option>
  <option value="14">충남</option>
  <option value="15">충북</option>
</select>


                <div className="inputbox">
                <br/>
                <label htmlFor="statusMsg">소개</label>
                <br />
                <input
                  type="text"
                  id="statusMsg"
                  value={statusMsg}
                  onChange={(event) => setStatusMsg(event.target.value)}
                  className='modal-input'
                />
                </div>
                <br/>
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


<div className='team-list'>
          <ul>
  {filteredTeams.map((team) => (
    <li key={team.id} className="team-item">
            <div className='team-item-one'>
              <Link to={`/teamdetail/${team.id}`}>
                <img src={`/images/${team.logo}.png`} alt={team.id + " 로고"} />
                </Link>
            </div>
            <div className='team-item-two'>
              <Link to={`/teamdetail/${team.id}`}>
                {team.name}
              </Link>
              <div>{getRegionName(team.gugun)}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>

    </div>
  );
};

export default Team;
