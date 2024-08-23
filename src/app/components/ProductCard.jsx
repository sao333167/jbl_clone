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

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <div className="product-colors">
        {product.colors.map((color, index) => (
          <span key={index} style={{ backgroundColor: color }}></span>
        ))}
      </div>
      <div className="product-name">{product.name}</div>
      <div className="product-description">{product.description}</div>
      <div className="product-price">{product.price}</div>
      <div className="product-original-price">{product.originalPrice}</div>
    </div>
  );
};

const Popular = () => {
  const options = {
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    navClass: ["carousel-prev", "carousel-next"],
    navText: [
      '<img src="https://www.svgrepo.com/show/305142/arrow-ios-back.svg" alt="Prev"/>',
      '<img src="https://cdn-icons-png.flaticon.com/512/2989/2989988.png" alt="Next"/>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3, // Display 3 items at a time
      },
      1200:{
        item: 4,
      },
      2000:{
        item:4,
      },
      3000:{
        item:4,
      },
      4000:{
        item:4,
      }
    },
    dotsClass: "carousel-dots", // Custom class for dots container
    dotClass: "carousel-dot", // Custom class for each dot
  };

  const products = [
    {
      id: 1,
      name: 'JBL Partybox 310',
      description: 'ลำโพงไร้สายปาร์ตี้ ที่เต็มไปด้วยพลังเสียงแบบ JBL Pro Sound พร้อมไฟปาร์ตี้',
      price: '฿21,900.00',
      originalPrice: '฿29,000.00',
      image: 'https://jblthailand.com/cdn/shop/files/JBL_GO_3_HERO_BLACK_535x535_8defb71d-5cfd-4ff6-af0e-adc489a37131_1024x1024.png?v=1698371825',
      colors: ['#000000']
    },
    {
      id: 2,
      name: 'JBL Go 3',
      description: 'ลำโพงกันน้ำขนาดเล็ก มาพร้อมพลังเสียงเต็มอิ่ม',
      price: '฿1,611.00',
      originalPrice: '฿1,790.00',
      image: 'https://jblthailand.com/cdn/shop/files/JBL_GO_3_HERO_BLACK_535x535_8defb71d-5cfd-4ff6-af0e-adc489a37131_1024x1024.png?v=1698371825',
      colors: ['#000000', '#FF0000', '#00FF00', '#0000FF']
    },
    {
      id: 3,
      name: 'JBL Charge 5',
      description: 'ลำโพงกันน้ำ มาพร้อม powerbank',
      price: '฿5,942.00',
      originalPrice: '฿6,990.00',
      image: 'https://jblthailand.com/cdn/shop/files/JBL_GO_3_HERO_BLACK_535x535_8defb71d-5cfd-4ff6-af0e-adc489a37131_1024x1024.png?v=1698371825',
      colors: ['#000000', '#FF0000', '#0000FF']
    },
    {
      id: 4,
      name: 'JBL Tune Flex',
      description: 'หูฟัง Earbuds ไร้สาย มาพร้อม Active Noise Cancelling',
      price: '฿3,591.00',
      originalPrice: '฿3,990.00',
      image: 'https://jblthailand.com/cdn/shop/files/JBL_GO_3_HERO_BLACK_535x535_8defb71d-5cfd-4ff6-af0e-adc489a37131_1024x1024.png?v=1698371825',
      colors: ['#000000', '#FFFFFF']
    }
  ];

  
  return (
    <div className="product-section">
      <div className="product-title">
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
        {products.map((product, index) => (
          
            <ProductCard key={product.id} product={product} />
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Popular;
