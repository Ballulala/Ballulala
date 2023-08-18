import React from "react";
import Card from "./individual_card";
import "./individual_points.css";
import TopNavbar from "../top_navbar/TopNavbar";

function PointStore() {
  const logos = [
    { src: "germany.png", id: 1 },
    { src: "france.png", id: 2 },
    { src: "england.png", id: 3 },
    { src: "croatia.png", id: 4 },
    { src: "spain.png", id: 5 },
  ];

  return (
    <div className="point-store-container">
      <TopNavbar />
      <h1>Point Store</h1>
      <div className="point-store-content">
        {logos.map((logo) => (
          <Card
            key={logo.id}
            itemId={logo.id}
            logoSrc={`/pointstoreimages/${logo.src}`}
          />
        ))}
      </div>
    </div>
  );
}

export default PointStore;
