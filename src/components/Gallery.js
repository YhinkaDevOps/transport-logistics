"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Gallery = () => {
  return (
    <div className="w-full min-h-[250px] py-10 bg-[#f4f5f7] text-black">
      <div className="text-center mb-10">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-black">
          Gallery
        </p>
      </div>
      <div className="mx-auto max-w-[1100px] my-5 px-4">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide">
            <img src="/assets/picture_1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/assets/picture_2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/assets/picture_3.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/assets/picture_4.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/assets/picture_5.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/assets/picture_6.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
