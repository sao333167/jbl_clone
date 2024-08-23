"use client";
import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On React JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Popular = () => {
  const options = {
    margin: 0,
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
      412:{
        items:2,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
    dotsClass: "custom-dots", // Custom class for dots container
    dotClass: "custom-dot" // Custom class for each dot
  };

  return (
    <div className="carousel-section">
      <div className="section-title">
        <h2>หมวดหมู่สินค้ายอดนิยม</h2>
        <div className="underline"></div>
      </div>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={0}
        nav={true}
        dots={true}
        {...options}
      >
        <div className="card">
          <img className="card-img" src="https://ucarecdn.com/fa4d2e15-4b11-41ec-9000-e27354119cdd/-/format/auto/-/preview/3000x3000/-/quality/lighter/2.JBL_QUANTUM_910_Wireless_Product%20Image_535x535px.png" alt="Gaming Headset" />
          <p className="card-caption">หูฟังและลำโพงเกม</p>
        </div>
        <div className="card">
          <img className="card-img" src="https://ucarecdn.com/f0266785-3856-442b-8836-a6de0b7c6f2a/-/format/auto/-/preview/3000x3000/-/quality/lighter/JBL_Tour%20Pro%202_Black%20535x535.png" alt="True Wireless" />
          <p className="card-caption">หูฟัง True Wireless</p>
        </div>
        <div className="card">
          <img className="card-img" src="https://ucarecdn.com/b0dba142-f436-4ed2-97a6-ba376e888417/-/format/auto/-/preview/3000x3000/-/quality/lighter/JBL_PULSE_5_HERO_535x535px.png" alt="Wireless Speaker" />
          <p className="card-caption">ลำโพงไร้สาย</p>
        </div>
        <div className="card">
          <img className="card-img" src="https://ucarecdn.com/abd3eaa1-7b67-41e2-a2fe-6b9bf2a874aa/-/format/auto/-/preview/3000x3000/-/quality/lighter/JBL_Partybox_Encore_535x535px.png" alt="Wireless Speaker" />
          <p className="card-caption">ลำโพงไร้สาย</p>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Popular;
