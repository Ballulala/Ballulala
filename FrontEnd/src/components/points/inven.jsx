import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import axios from "axios";
import { tokenState, reloadState } from "../../../src/atoms";
import Swal from "sweetalert2";

function Inventory() {
  const [items, setItems] = useState([]);
  const token = useRecoilValue(tokenState);
  const reload = useRecoilValue(reloadState);
  const handleEquip = async (itemId) => {
    try {
      const response = await axios.post(
        "https://i9d110.p.ssafy.io:8081/users/profile",
        {
          id: itemId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.message === "success") {
        alert("장착되었습니다");
      } else {
        console.error("Failed to equip the item");
      }
    } catch (error) {
      console.error("Error equipping the item:", error);
    }
  };

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
          setItems(data.replyList || []);
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
            <button onClick={() => handleEquip(item.id)}>장착</button>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inventory;
