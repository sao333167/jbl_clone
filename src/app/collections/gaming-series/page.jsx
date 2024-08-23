import Card from "@/app/components/Card";
import ProductsHeader from "@/app/components/ProductHeader";
import SliderBarOption from "@/app/components/SliderBarOption";
import Link from "next/link";
import React from "react";

const GamingBanner = () => {
  const product = {
    image:
      "https://cdn.shopify.com/s/files/1/0790/6263/0676/files/2.JBL_Quantum_400_ProductImage_Front_535x535px_900x.png?v=1708498148",
    colors: ["#000000"],
    name: "JBL QUANTUM 400",
    price: "฿3,990.00",
  };
  return (
    <>
      <div className="gamingBanner">
        <div className="gamingBannerContent">
          <h1>หูฟังและลำโพงเกม</h1>
          <p>เปิดประสบการณ์เสียงคมชัดเต็มรูปแบบในโหมดเอ็กซ์เกมส์</p>
        </div>
      </div>
      <div className="route">
        <Link href="/">
          <span className="home">Home / </span>
        </Link>
        <span className="sub-dir">Gaming Series</span>
      </div>
      <ProductsHeader />
      <div className="flex">
        <div>
         
          <SliderBarOption />
        </div>
        <Card product={product} />
      </div>
    </>
  );
};

export default GamingBanner;
