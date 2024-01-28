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
          height: "500px"
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
        <SwiperSlide><img src="https://resortdanang.info/wp-content/uploads/2018/11/ho-boi-hyatt-resort-da-nang.jpg" alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src="https://dmaevvtdousx6.cloudfront.net/uploads/2018/08/gallery49.jpg" alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src="https://onetouchmedia.vn/wp-content/uploads/2019/10/N.NT-31.jpg" alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img src="https://toquoc.mediacdn.vn/2019/12/2/tgb20191101-movenpickresort-camranh-00030-hd-15752941926061222583598.jpg" alt="Slide 4" /></SwiperSlide>
        <SwiperSlide><img src="https://ezcloud.vn/wp-content/uploads/2018/06/resort-voi-be-boi-vo-cuc.webp" alt="Slide 5" /></SwiperSlide>
        <SwiperSlide><img src="https://uhmhotels.com/media/1983165/dac-diem-quan-ly-resort-1.jpg?anchor=center&mode=crop&width=1400&height=578&rnd=132900205810000000" alt="Slide 6" /></SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default Carousel