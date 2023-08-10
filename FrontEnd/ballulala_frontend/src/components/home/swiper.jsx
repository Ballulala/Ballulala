import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{ height: "300px" }} // 높이를 원하는 크기로 조정하세요.
    >
      <SwiperSlide>
        <img
          src={process.env.PUBLIC_URL + "/images/swiper_1.jpg"}
          alt="Slide 1"
          style={{ width: "100%", height: "100%" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={process.env.PUBLIC_URL + "/images/이강인2.jpg"}
          alt="Slide 2"
          style={{ width: "100%", height: "100%" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={process.env.PUBLIC_URL + "/images/이강인3.jpg"}
          alt="Slide 3"
          style={{ width: "100%", height: "100%" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={process.env.PUBLIC_URL + "/images/이미지4.png"}
          alt="Slide 4"
          style={{ width: "100%", height: "100%" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
