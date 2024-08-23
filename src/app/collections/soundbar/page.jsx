import React from "react";
import styles from "./sound.module.css";
import SubscriptionSection from "@/app/components/Subscription";
import Card from "@/app/components/Card";
import ProductsHeader from "@/app/components/ProductHeader";
import Link from "next/link";
import SliderBarOption from '@/app/components/SliderBarOption';
export default function Soundbar() {
  const product = {
    image:
      "https://cdn.shopify.com/s/files/1/0790/6263/0676/files/2.JBL_Quantum_400_ProductImage_Front_535x535px_900x.png?v=1708498148",
    colors: ["#000000"],
    name: "JBL QUANTUM 400",
    price: "฿3,990.00",
  };
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>Soundbars</h1>
          <p>
            ระบบเสียงที่มาพร้อมกับเทคโนโลยี
            <br />
            เพื่อการฟังเพลงและชมภาพยนตร์ในบ้านของคุณได้อย่างคุ้มค่าราวกับอยู่ในโรงภาพยนตร์ส่วนตัว
          </p>
        </div>
      </div>
      <div className="route">
        <Link href="/">
          <span className="home">Home / </span>
        </Link>
        <span className="sub-dir">Soundbar</span>
      </div>
      <ProductsHeader />
      <div className="flex">
          <div>
            <SliderBarOption />
          </div>
          <Card product={product} />
        </div>
        <SubscriptionSection />
    </>
  );
}
