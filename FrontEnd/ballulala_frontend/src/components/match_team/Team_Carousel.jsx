import { Swiper, SwiperSlide } from "swiper/react";
import CarouselItem from "./Team_Carouselitem";

function Carousel({ teams }) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {teams.map((team) => (
        <SwiperSlide key={team.id}>
          <CarouselItem team={team} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
