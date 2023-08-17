import React, { useEffect, useState } from "react";
import axios from "axios";
import { tokenState } from "../../../src/atoms";
import { useRecoilValue } from "recoil";
import "./ResultInput.css";

function ResultInput({ match }) {
  const [userRole, setUserRole] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [scores, setScores] = useState({});
  const token = useRecoilValue(tokenState);

  useEffect(() => {
    axios
      .get("https://i9d110.p.ssafy.io:8081/users/myInfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.state === "SUCCESS") {
          setUserRole(response.data.user.role);
        }
      })
      .catch((error) => {
        console.error("API 호출 중 에러 발생:", error);
      });
  }, [token]);

  if (userRole !== 2) {
    return null;
  }

  const handleResultInputClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleScoreChange = (key, value) => {
    setScores((prevScores) => ({
      ...prevScores,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://i9d110.p.ssafy.io:8081/play/result",
        scores,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("경기 결과가 성공적으로 입력되었습니다.");
        setIsModalOpen(false); // 모달을 닫습니다.
      } else {
        alert("경기 결과 입력에 실패했습니다.");
      }
    } catch (error) {
      alert("API 호출 중 에러 발생:", error);
    }
  };

  return (
    <>
      <button onClick={handleResultInputClick}>경기 결과입력</button>
      {isModalOpen && (
        <div className="result-modal">
          <h2>경기 결과 입력</h2>
          <div className="score-grid">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div className="match-score" key={idx}>
                <label>
                  경기 {idx + 1}:
                  <input
                    type="number"
                    value={scores[`teamScore${idx + 1}1`] || ""}
                    onChange={(e) =>
                      handleScoreChange(`teamScore${idx + 1}1`, e.target.value)
                    }
                  />
                  -
                  <input
                    type="number"
                    value={scores[`teamScore${idx + 1}2`] || ""}
                    onChange={(e) =>
                      handleScoreChange(`teamScore${idx + 1}2`, e.target.value)
                    }
                  />
                </label>
              </div>
            ))}
          </div>
          <button onClick={handleSubmit}>입력</button>
          <button onClick={closeModal}>닫기</button>
        </div>
      )}
    </>
  );
}

export default ResultInput;
