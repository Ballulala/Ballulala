import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./Date_Bar.css";

const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

const DateBar = () => {
  const currentDate = new Date();

  const slideArray = [];
  for (let i = 0; i < 14; i++) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + i);
    const formattedDate = `${date.getDate()}`;
    const formattedDay = weekDays[date.getDay()];
    const dateWrapClass = `dateWrap ${date.getDay() === 0 ? "isSun" : ""} ${
      date.getDay() === 6 ? "isSat" : ""
    }`;

    slideArray.push(
      <SwiperSlide key={i}>
        <div id="datewrap" className={dateWrapClass}>
          <p>{formattedDate}</p>
          <span>{formattedDay}</span>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      slidesPerView={5}
      centeredSlides={false}
      spaceBetween={10}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      initialSlide={0}
    >
      {slideArray}
    </Swiper>
  );
};

export default DateBar;
