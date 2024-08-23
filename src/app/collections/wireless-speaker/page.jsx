import React from 'react';
import Link from 'next/link';
import MainProductCard from '@/app/components/MainProductCard';
import SubscriptionSection from '@/app/components/Subscription';

const WirelessSpeaker = () => {
  return (
    <>
    <div className="banner-section">
      <div className="banner-content">
        <div className="banner-title">ลำโพงไร้สาย</div>
        <div className="banner-subtitle">
          สตรีมเพลงของคุณด้วยลำโพงบลูทูธไร้สายได้ทุกๆ ที่ที่บ้าน และในทุกที่ที่คุณไป
        </div>
      </div>
    </div>
    <div className='route'>
      <Link href="/">
        <span className='home'>Home / </span>
      </Link>
      <span className='sub-dir'>WirelessSpeaker</span>
    </div>
    <MainProductCard/>
    <SubscriptionSection/>
    </>
  );
};

export default WirelessSpeaker;
