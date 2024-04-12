import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AestheticCard from "./AestheticCard"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import slide_image_1 from '../../assets/img_1.jpg';
import slide_image_2 from '../../assets/img_2.jpg';
import slide_image_3 from '../../assets/img_3.jpg';
export default function Slider(){
    return(
        <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 50,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        style={{top:"60px"}}
      >
        <SwiperSlide className='swiper-slide'>
          <AestheticCard avatarSrc={slide_image_1} headerContent={"Nirai pandiyan P"}>I am nirai</AestheticCard>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <AestheticCard avatarSrc={slide_image_2} headerContent={"Rajagopal T"}>I am gopal</AestheticCard>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <AestheticCard avatarSrc={slide_image_3} headerContent={"Safrin G"}>I am safrin</AestheticCard>
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    );
}