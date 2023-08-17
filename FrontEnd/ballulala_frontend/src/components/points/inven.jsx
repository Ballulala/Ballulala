import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { tokenState, reloadState } from "../../../src/atoms"; // 경로 수정 필요

function Inventory() {
  const [items, setItems] = useState([]);
  const token = useRecoilValue(tokenState);
  const reload = useRecoilValue(reloadState);

  useEffect(() => {
    const fetchPurchasedItems = async () => {
      try {
        const response = await fetch(
          "https://i9d110.p.ssafy.io:8081/useritem/list",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setItems(data.replyList || []); // API 응답에 따라 적절하게 수정해야 할 수 있습니다.
        } else {
          console.error("Failed to fetch purchased items");
        }
      } catch (error) {
        console.error("Error fetching purchased items:", error);
      }
    };

    fetchPurchasedItems();
  }, [token, reload]);

  return (
    <div className="inventory-container">
      <h2>Your Inventory</h2>
      <div className="inventory-items">
        {items.map((item) => (
          <div key={item.id} className="inventory-item">
            <img src={`/pointstoreimages/${item.img}.png`} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inventory;
