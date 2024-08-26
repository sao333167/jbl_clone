import React from 'react';
import Link from 'next/link';
import MainProductCard from '@/app/components/MainProductCard';
import SubscriptionSection from '@/app/components/Subscription';
import Banner from '@/app/components/Banner';

const WirelessSpeaker = () => {
    return (
        <>
            <Banner title="ลำโพงไร้สาย" subTitle="สตรีมเพลงของคุณด้วยลำโพงบลูทูธไร้สายได้ทุกๆ ที่ทั้งที่บ้าน และในทุกที่ที่คุณไป" classBg="im__001"/>
            <MainProductCard/>
            <SubscriptionSection/>
        </>
    );
};

export default WirelessSpeaker;
