import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

export default function Slide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='w-[300px] h-full '>
            😂
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[300px] h-full '>
            😍
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[300px] h-full '>
            🥲
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[300px] h-full '>
            😭
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[300px] h-full '>
            😑
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[300px] h-full '>
            🤓
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[300px] h-full '>
            🥹
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[300px] h-full '>
            😐
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[300px] h-full '>
            😶‍🌫️
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
