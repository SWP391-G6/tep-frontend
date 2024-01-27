import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Box, Typography } from "@mui/material";

const TopDestinationCarousel = () => {
  return (
    <>
      <Swiper
        style={{ marginTop: "10px" }}
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: false,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ height: "300px" }}>
          <img
            src={require("../../assets/sapa.webp")}
            width="100%"
            height="270px"
            alt=""
          />
          <Typography>Sapa</Typography>
        </SwiperSlide>
        <SwiperSlide style={{ height: "300px" }}>
          <img
            src={require("../../assets/halongbay.jpg")}
            width="100%"
            height="270px"
            alt=""
          />
          <Typography>Ha Long Bay</Typography>
        </SwiperSlide>
        <SwiperSlide style={{ height: "300px" }}>
          <img
            src={require("../../assets/phuquoc.jpg")}
            width="100%"
            height="270px"
            alt=""
          />
          <Typography>Phu Quoc Island</Typography>
        </SwiperSlide>
        <SwiperSlide style={{ height: "300px" }}>
          <img
            src={require("../../assets/hanoi.jpg")}
            width="100%"
            height="270px"
            alt=""
          />
          <Typography>Ancient city of Hanoi</Typography>
        </SwiperSlide>
        <SwiperSlide style={{ height: "300px" }}>
          <img
            src={require("../../assets/danang.jpg")}
            width="100%"
            height="270px"
            alt=""
          />
          <Typography>Ba Na Hills, Da Nang</Typography>
        </SwiperSlide>
        <SwiperSlide style={{ height: "300px" }}>
          <img
            src={require("../../assets/hcmc.jpg")}
            width="100%"
            height="270px"
            alt=""
          />
          <Typography>Ho Chi Minh City</Typography>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TopDestinationCarousel;
