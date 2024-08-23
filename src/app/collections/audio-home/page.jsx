import MainProductCard from "@/app/components/MainProductCard";
import Link from "next/link";
import React from "react";

const HomeAudioBanner = () => {
  return (
    <>
      <div className={"homeAudioBanner"}>
        <div className={"bannerContent"}>
          <h1 className={"bannerTitle"}>เครื่องเสียงบ้าน</h1>
          <p className={"bannerSubtitle"}>
            เพลิดเพลินได้ที่บ้าน
            หรือที่ทำงานของคุณด้วยระบบโฮมเธียเตอร์ใหม่ล่าสุด, ลำโพงซาวด์บาร์,
            ลำโพงเชื่อมต่อมือถือ และลำโพงคอมพิวเตอร์
          </p>
        </div>
      </div>
      <div className="route">
        <Link href="/">
          <span className="home">Home / </span>
        </Link>
        <span className="sub-dir">Gaming Series</span>
      </div>
      <div className="flex">
      <MainProductCard/>
      <MainProductCard/>
      </div>

    </>
  );
}
export default HomeAudioBanner;
