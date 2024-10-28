"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; 
import { Navigation } from 'swiper/modules';
import { FaLongArrowAltRight } from "react-icons/fa";
import '../../styles/globals.css'
const slidesContent = [
  {
    image: "https://themewagon.github.io/ultras/images/banner1.jpg",
    title: "Summer Collection",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.",
  },
  {
    image: "https://themewagon.github.io/ultras/images/banner2.jpg",
    title: "Casual Collection",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.",
  },
];

const FirstSect = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {slidesContent.map((slide, index) => (
        <SwiperSlide key={index} aria-label={`Slide ${index + 1}`}>
          <div className="relative">
            <img className="h-[600px] w-full object-cover" src={slide.image} alt={slide.title} />
            <div className="absolute inset-0 xl:w-1/2 xl:top-[20%] left-[5%] max-sm:left-[15%] xl:h-[500px] md:w-[600px] min-[320px]:w-[50%] flex flex-col xl:justify-around md:h-[450px] sm:justify-evenly max-sm:justify-center max-sm:gap-2 items-start">
              <h2 className="w-3/4 2xl:text-[5rem] xl:text-8xl md:text-4xl lg:text-6xl font-black text-start sm:text-2xl">
                {slide.title}
              </h2>
              <p className='w-3/4 text-start max-sm:truncate max-sm:text-xs'>
                {slide.text}
              </p>
              <button className='bttn flex items-center justify-center gap-1 bg-white sm:w-[60%] rounded-lg md:w-[40%] max-sm:p-1 p-4'>
                <a>SHOP IT NOW</a>
                <FaLongArrowAltRight className='arrow'/>
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FirstSect;
