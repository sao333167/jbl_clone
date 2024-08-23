import React from "react";
import styles from "./TrueWirelessHeadphones.module.css";
import SliderBarOption from '@/app/components/SliderBarOption';
import Link from "next/link";
import ProductsHeader from "@/app/components/ProductHeader";
import Card from "@/app/components/Card";
import SubscriptionSection from "@/app/components/Subscription";
export default function TrueWirelessHeadphones() {
    const product = {
        image: 'https://cdn.shopify.com/s/files/1/0790/6263/0676/files/2.JBL_Quantum_400_ProductImage_Front_535x535px_900x.png?v=1708498148',
        colors: ['#000000'],
        name: 'JBL QUANTUM 400',
        price: '฿3,990.00'
      };
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>หูฟัง True Wireless</h1>
          <p>
            เป็นอิสระจากสายใดๆ
            สตรีมเพลงและการโทรของคุณได้แบบไร้สายด้วยเสียงระดับพรีเมียมแบตเตอรี่ที่ใช้งานได้นาน
            พร้อมเทคโนโลยีล่าสุด
          </p>
        </div>
      </div>
      <div className="route">
        <Link href="/">
          <span className="home">Home / </span>
        </Link>
        <span className="sub-dir">หูฟังแบบ Over-Ear และแบบ On-Ear</span>
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
