"use client";
import Image from "next/image";
import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperCarousel = () => {
  return (
    <div className="h-[90vh] ">
      <Swiper
        cssMode={true}
        autoplay={{
          delay: 200500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper w-full"
      >
        {imgs.map((img, idx) => (
          <SwiperSlide key={idx} className="w-full h-[100vh] overflow-hidden">
            <div className="item-img">
              <Image
                width={1000}
                height={1000}
                alt={img.alt}
                src={img.src}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;

const imgs = [
  {
    alt: "photo",
    src: "https://ucarecdn.com/0a94151c-f0d9-44fb-8767-176fa042e07c/-/format/auto/-/preview/3000x3000/-/quality/lighter/HP_Home%20LivePro2-1400%20x%20680px.jpg",
  },
  {
    alt: "photo",
    src: "https://ucarecdn.com/560a9ead-5b67-4408-9f80-ed8da499b125/-/format/auto/-/preview/3000x3000/-/quality/lighter/Boombox3_HP_Home%20Boonbox3-1400%20x.jpg",
  },
  {
    alt: "photo",
    src: "https://ucarecdn.com/c279cc2b-72cc-4e7b-9847-653f579463bc/-/format/auto/-/preview/3000x3000/-/quality/lighter/Banner-Makes-Earbuds-2.jpeg",
  },
];
