import React, { useState, useEffect } from "react";
import axios from "axios";

function PointShop({ user, updateUser }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("https://yourapi.com/shop/items");
        setItems(response.data);
      } catch (error) {
        console.error("Failed to fetch items", error);
      }
    };

    fetchItems();
  }, []);

  const purchaseItem = async (item) => {
    if (user.point < item.price) {
      alert("Not enough points!");
      return;
    }

    try {
      const response = await axios.post("https://yourapi.com/shop/purchase", {
        userId: user.id,
        itemId: item.id,
      });

      if (response.data.success) {
        alert("Purchase successful!");
        updateUser({
          ...user,
          point: user.point - item.price,
          profileImage: item.imageUrl,
        });
      } else {
        alert("Purchase failed!");
      }
    } catch (error) {
      console.error("Failed to purchase item", error);
    }
  };

  return (
    <div>
      <h2>Point Shop111</h2>
      <div className="shop-items">
        {items.map((item) => (
          <div
            key={item.id}
            className="shop-item"
            onClick={() => purchaseItem(item)}
          >
            <img src={item.imageUrl} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price} Points</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PointShop;
