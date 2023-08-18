import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeMatchList from "./HomeMatchlist";
import axios from "axios";
import "swiper/css";
import "swiper/css/scrollbar";
import "./HomeDateBar.css";

const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

const HomeDateBar = ({ onDateSelect }) => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(null);
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    if (selectedDate) {
      const formattedDate = `${selectedDate.getFullYear()}-${String(
        selectedDate.getMonth() + 1
      ).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`;
      axios
        .get(
          `https://i9d110.p.ssafy.io:8081/matches/listFull?matchDate=${formattedDate}`
        )
        .then((response) => {
          if (response.data.message === "success") {
            setMatches(response.data.matchList);
          }
        })
        .catch((error) => {
          console.error("API 호출 중 에러 발생:", error);
        });
    }
  }, [selectedDate]);

  const handleDateClick = (selectedDate) => {
    setSelectedDate(selectedDate);
    if (onDateSelect) {
      onDateSelect(selectedDate);
    }
  };

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
      <SwiperSlide key={i} onClick={() => handleDateClick(date)}>
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
      <HomeMatchList matches={matches} />
    </Swiper>
  );
};

export default HomeDateBar;
