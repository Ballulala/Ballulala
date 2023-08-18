import React from "react";

function CarouselItem({ team }) {
  return (
    <div>
      <img src={team.logoUrl} alt={team.name} />
      <h2>{team.name}</h2>
    </div>
  );
}

export default CarouselItem;
