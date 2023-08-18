import React, { useState } from "react";
import TopNavbar from "../top_navbar/TopNavbar";
import DateBar_Individual from "./Date_bar_individual";
import MatchModal from "./Match_individual_modal";

function IndividualMatching() {
  const coverImagePath = process.env.PUBLIC_URL + "/images/img_stadium_2.jpg";
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalSubmit = (data) => {
    console.log("Submitted Data:", data);
    // 여기서 API 호출 등의 로직을 수행할 수 있습니다.
    setModalOpen(false);
  };

  return (
    <div className="team-page">
      <TopNavbar />
      <div
        className="image-container sliding-image"
        style={{ backgroundImage: `url(${coverImagePath})` }}
      >
        <div className="rank-text">Match (player)</div>
      </div>
      <button onClick={() => setModalOpen(true)}>매치 정보 입력</button>{" "}
      {/* 모달을 열 버튼 */}
      <MatchModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
      <DateBar_Individual />
    </div>
  );
}

export default IndividualMatching;
