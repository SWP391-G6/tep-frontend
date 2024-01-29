import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Box } from '@mui/system';


const Carousel = () => {
  return (
    <Box >
      <Swiper
        style={{
          height: "550px"
        }}
        navigation={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"  >
        <SwiperSlide><img src="https://i.ibb.co/nrJWvNc/banner2.jpg" alt="Banner 1" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/3RgDTvn/banner1.webp" alt="Banner 2" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/w6ZqkqT/Topas-Ecolodgebanner.jpg" alt="Topas Ecolodge" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/kc9RWPm/banner-du-lich-he.jpg" alt="Banner 4" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/J3NhwhK/Hanoi-banner.jpg" alt="Banner 5" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/3C0XjXF/hcm.jpg" alt="Banner 6" /></SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default Carousel