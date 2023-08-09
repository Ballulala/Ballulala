import React, { useState, useEffect } from 'react';
import './TeamSetting.css';
import TopNavbar from '../top_navbar/TopNavbar';
import TeamModal from './TeamModal';
import { Link, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { differenceInMinutes, addMinutes } from 'date-fns'; // date-fns 라이브러리를 사용하지 않으시면 설치해주세요 (npm install date-fns --save)
import { isEqual, uniqWith } from 'lodash';
// import { isEqual, uniqWith, sortBy } from 'lodash';
import 'react-datepicker/dist/react-datepicker.css';
import { teamDetailData } from './TeamDummyData';

function TeamSettingJoinList() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const [isRecruitStartModalOpen, setIsRecruitStartModalOpen] = useState(false);
  const [isRecruitCancelModalOpen, setIsRecruitCancelModalOpen] = useState(false);

  const [recruitmentDate, setRecruitmentDate] = useState(new Date());
  const [interviewStatus, setInterviewStatus] = useState('No');
  const [interviewDate, setInterviewDate] = useState(null);
  const [interviewTimes, setInterviewTimes] = useState([]);
  const interviewTimeOptions = () => {
  const options = [];
  const startTime = new Date(0, 0, 0, 10, 0);
  const endTime = new Date(0, 0, 0, 19, 0);
  const diff = differenceInMinutes(endTime, startTime);
  for (let i = 0; i < diff; i += 60) {
    options.push(addMinutes(startTime, i));
  }
  return options;
};
  const toggleTime = (time) => {
    const newTimes = interviewTimes.some((it) => isEqual(it, time))
      ? interviewTimes.filter((it) => !isEqual(it, time))
      : uniqWith([...interviewTimes, time], isEqual).sort();
    setInterviewTimes(newTimes);
  }

  const { teamId } = useParams();
  const [team, setTeam] = useState({});

  useEffect(() => {
    const foundTeam = teamDetailData.find((t) => t.team_id === teamId);
    if (foundTeam) {
      setTeam(foundTeam);
    }
  }, [teamId]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);};

  const closeEditModal = () => {
    setIsEditModalOpen(false);};

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);};

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    console.log('Image file:', image.name);};

    const openRecruitModal = () => {
      setIsRecruitStartModalOpen(true);
    };
    
    const closeRecruitModal = () => {
      setIsRecruitStartModalOpen(false);
    };
    
    const openRecruitCancleModal = () => {
      setIsRecruitCancelModalOpen(true);
    };
    
    const closeRecruitCancleModal = () => {
      setIsRecruitCancelModalOpen(false);
    };

    const handleRecruitCancelConfirm = () => {
      setTeam({ ...team, mojib: 0 });
    };
    
    const handleRecruitStartConfirm = () => {
      setTeam({ ...team, mojib: 1 });
    };
  
    const handleUpdateTeamInfo = () => {
      // team 객체에서 원래 정보를 상태 변수에 설정합니다.
      setImage(team.image);
      setName(team.name);
      setLocation(team.location);
      setStatusMsg(team.statusMsg);
    }

  return (
    <div>
      <TopNavbar />

      <div className="team-setting-page">
        <div className="team-setting-section">
          <div className="team-setting-info">
            {/* <img
              className="team-logo-img"
              src={"/empty_img_circle.png"}
              alt="Logo"
            /> */}
            <img className="team-logo-img" src={team.logo} alt={`${team.name} 로고`} />

            <div className="team-name">{team.name}</div>
            <button className="team-edit-btn team-join-btn" onClick={openEditModal}>
              팀 정보 수정
            </button>
          </div>
          <button className="team-del-btn" onClick={openDeleteModal}>
            팀 삭제하기
          </button>
        </div>

        <div className="team-settings">
            <div className='setting-category'>
                <Link to={`/teamsetting/${teamId}`} className='setting-link-selected'>멤버</Link>
                <div>|</div>
                <Link to={`/teamsettingdaily/${teamId}`} className='setting-link'>일정</Link>
            </div>

        <div className="member-now">
            <img src={"/icon_member.png"} alt="img" />
            <Link to={`/teamsetting/${teamId}`} className='setting-link'>
              멤버
            </Link>
            <Link to={`/teamsettingjoinlist/${teamId}`} className='setting-link-selected'>
              가입대기중
            </Link>

            <button
              className="recruit-btn"
              onClick={team.mojib === 1 ? openRecruitCancleModal : openRecruitModal}
            >
              {team.mojib === 1 ? "모집중단" : "모집시작"}
            </button>

          </div>

        <div className='member-list'>
          가입 대기중
          </div>
        
        </div>
      </div>

      <TeamModal
        title="팀 정보 수정"
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        onSubmit={handleUpdateTeamInfo}
      >
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
      </TeamModal>


      <TeamModal
        title="팀 삭제하기"
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
      >
        <div>정말 삭제하시겠습니까?</div>
      </TeamModal>

      <TeamModal
        title="모집 중단"
        isOpen={isRecruitCancelModalOpen}
        onClose={closeRecruitCancleModal}
        onSubmit={handleRecruitCancelConfirm}
      >
        <div>모집을 중단하시겠습니까?</div>
      </TeamModal>

      <TeamModal
        title="모집 시작"
        isOpen={isRecruitStartModalOpen}
        onClose={closeRecruitModal}
        onSubmit={handleRecruitStartConfirm}
      >
        <div>
          <h4>모집 종료 날짜</h4>
          <DatePicker
            selected={recruitmentDate}
            onChange={(date) => setRecruitmentDate(date)}
          />
        </div>

  <div>
    <h4>면접 여부</h4>
    <label>
      <input
        type="radio"
        value="Yes"
        checked={interviewStatus === 'Yes'}
        onChange={(e) => setInterviewStatus(e.target.value)}
      />
      Yes
    </label>
    <label>
      <input
        type="radio"
        value="No"
        checked={interviewStatus === 'No'}
        onChange={(e) => setInterviewStatus(e.target.value)}
      />
      No
    </label>
  </div>

  {interviewStatus === 'Yes' && (
  <div>
    <h4>1. 면접 일자</h4>
    <DatePicker
      selected={interviewDate}
      onChange={(date) => setInterviewDate(date)}
    />

    <h4>2. 면접 시간</h4>
    <ul className="interview-times-list">
      {interviewTimeOptions().map((time, index) => (
        <li key={index} className={interviewTimes.some((it) => isEqual(it, time)) ? "selected" : ""}
          onClick={() => toggleTime(time)}>
          {time.toTimeString().slice(0, 5)}
        </li>
      ))}
    </ul>
    </div>
  )}
</TeamModal>


    
    </div>
  );
}

export default TeamSettingJoinList;
