import React from "react";
import "./individual_card.css";
import { tokenState } from "../../../src/atoms";
import { useRecoilValue } from "recoil";
import "./inven.css";

function Card({ itemId, logoSrc }) {
  const token = useRecoilValue(tokenState);

  const handlePurchase = async () => {
    try {
      const response = await fetch(
        "https://i9d110.p.ssafy.io:8081/useritem/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ itemId }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        alert("구매가 완료되었습니다!");
      } else {
        const errorMsg = await response.text();
        console.error("Purchase error:", errorMsg);
      }
    } catch (error) {
      console.error("Purchase request error:", error);
    }
  };

  return (
    <div className="card-container">
      <img src={logoSrc} alt="Logo" className="card-logo" />
      <p className="card-price">500 포인트</p>
      <button onClick={handlePurchase} className="purchase-button">
        구매하기
      </button>
    </div>
  );
}

export default Card;
