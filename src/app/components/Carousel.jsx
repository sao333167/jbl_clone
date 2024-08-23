"use client";
// src/components/OwlCarouselComponent.js
import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import "../styles/Carousel.module.css"; 

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On React JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Carousel = () => {
  const options = {
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true, 
    autoplayTimeout: 3000, 
    autoplayHoverPause: true, 
    smartSpeed: 1000,
    navClass: ["custom-prev", "custom-next"],
    navText: [
      '<img src="https://www.svgrepo.com/show/305142/arrow-ios-back.svg" />',
      '<img src="https://cdn-icons-png.flaticon.com/512/2989/2989988.png" />',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <OwlCarousel
      className="owl-theme"
      loop
      margin={10}
      nav={true}
      dots={true}
      {...options}
    >
      <div className="item">
        <img className="item-img" src="https://ucarecdn.com/0a94151c-f0d9-44fb-8767-176fa042e07c/-/format/auto/-/preview/3000x3000/-/quality/lighter/HP_Home%20LivePro2-1400%20x%20680px.jpg" alt="Image 1" />
        <div className="overlay">
          <h2>REFRAME YOUR LIFE.</h2>
          <button className="learn-more">ดูเพิ่มเติม</button>
        </div>
      </div>
      <div className="item">
        <img className="item-img" src="https://ucarecdn.com/560a9ead-5b67-4408-9f80-ed8da499b125/-/format/auto/-/preview/3000x3000/-/quality/lighter/Boombox3_HP_Home%20Boonbox3-1400%20x.jpg" alt="Image 2" />
        <div className="overlay">
          <h2>JBL MAKES HEADPHONES</h2>
          <button className="learn-more">ดูเพิ่มเติม</button>
        </div>
      </div>
      <div className="item">
        <img className="item-img" src="https://ucarecdn.com/c279cc2b-72cc-4e7b-9847-653f579463bc/-/format/auto/-/preview/3000x3000/-/quality/lighter/Banner-Makes-Earbuds-2.jpeg" alt="Image 2" />
        <div className="overlay">
          <h2>JBL MAKES HEADPHONES</h2>
          <button className="learn-more">ดูเพิ่มเติม</button>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default Carousel;
