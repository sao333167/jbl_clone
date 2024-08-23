// components/Banner.js
"use client"
import Link from "next/link";
import styles from "./Banner.module.css";
import ProductsHeader from "@/app/components/ProductHeader";
import Card from "@/app/components/Card";
import SubscriptionSection from "@/app/components/Subscription";
import SliderBarOption from "@/app/components/SliderBarOption";
import Filter from "@/app/components/Filter";
import { useState } from "react";
import FilterMenu from "@/app/components/FilterMenu";
import PriceFilter from "@/app/components/PriceFilter";
import FilterColor from "@/app/components/FilterColor";


export default function Banner() {
  const [selectedFilters, setSelectedFilters] = useState({});
  const products = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0790/6263/0676/files/1_JBL_BOOMBOX_3_HERO_BLACK_535x535px_900x.png?v=1699580094",
      colors: ["#000000"],
      name: "JBL Boombox 3",
      price: "฿21,900.00",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0790/6263/0676/files/JBL_BOOMBOX3_WIFI_HERO_535x535px_900x.png?v=1707795272",
      colors: ["#000000"],
      name: "JBL BOOMBOX 3 WI-FI",
      price: "฿24,900.00",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0790/6263/0676/files/1_JBL_FLIP_ESSENTIAL_2_FRONT_535x535_0cb22358-d374-4492-a908-7e38ba6a3e62_900x.png?v=1707905391",
      colors: ["#000000"],
      name: "JBL FLIP ESSENTIAL 2",
      price: "฿4,690.00",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0790/6263/0676/files/JBL_XTREME_3_HERO_535x535px_900x.png?v=1698653886",
      colors: ["#000000", "#9ad0ec"],
      name: "JBL XTREME 3",
      price: "฿12,900.00",
    },
  ];
  const filters = [
    { name: "Bluetooth", count: 15 },
    { name: "Water proof", count: 15 },
    { name: "Jbl Quantum Sound Signature", count: 5 },
    { name: "Bluetooth", count: 4 },
    { name: "Bluetooth", count: 4 },
    { name: "Bluetooth", count: 4 },{ name: "Bluetooth", count: 4 },
    { name: "Bluetooth", count: 4 },
    { name: "Bluetooth", count: 4 },
  ];
  const handleFilterChange = (filterName) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>ลำโพงบลูทูธพกพา</h1>
          <p>
            ด้วยอายุแบตเตอรี่ที่ยาวนานและเทคโนโลยีบลูทูธ ลำโพงไร้สายพกพาจาก JBL
            จึงให้คุณ เพลิดเพลินไปกับเพลง ได้แม้อยู่ไกลบ้าน
          </p>
        </div>
      </div>
      <div className="route">
        <Link href="/">
          <span className="home">Home / </span>
        </Link>
        <span className="sub-dir">ลำโพงบลูทูธพกพา</span>
      </div>
      <ProductsHeader />
      <div className="inline-flex">
        <div className="">
        <FilterMenu filters={filters} />
        <PriceFilter/>
        <FilterColor/>
        </div>
        <div className="container-card flex">
          {products.map((product, index) => (
            <Card key={index} product={product} className="card" />
          ))}
        </div>
      </div>
      <SubscriptionSection />
    </>
  );
}
