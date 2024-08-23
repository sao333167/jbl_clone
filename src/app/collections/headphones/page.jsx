import MainProductCard from '@/app/components/MainProductCard';
import SubscriptionSection from '@/app/components/Subscription';
import Link from 'next/link';
import React from 'react';

const HeadphoneBanner = () => {
  return (
    <>
    <div className="headphoneBanner">
      <div className="headphoneBannerContent">
        <h1>หูฟัง</h1>
        <p>ฟังคุณภาพเสียง JBL ที่ออกแบบมาอย่างมีสไตล์ สวมใส่สบาย คุณภาพสูง</p>
      </div>
    </div>
    <div className='route'>
      <Link href="/">
        <span className='home'>Home / </span>
      </Link>
      <span className='sub-dir'>Headphones</span>
    </div>
    <div className='flex'>
      <MainProductCard/>
      <MainProductCard/>
      </div>
    <SubscriptionSection/>
    </>
  );
};

export default HeadphoneBanner;
