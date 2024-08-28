"use client"

import React from "react";
import SubscriptionSection from '@/app/components/Subscription';
import Banner from '@/app/components/Banner';
import ProductList from "@/app/components/ProductList";
import Filter from '@/app/components/Filter';
import { WirelessSpeakers } from '@/app/data/WirelessSpeakers'

export default function BluetoothSpeakers() {
    return (
        <>
            <Banner title="ลำโพงบลูทูธพกพา" subTitle="ด้วยอายุแบตเตอรี่ที่ยาวนานและเทคโนโลยีบลูทูธ ลำโพงไร้สายพกพาจาก JBL จึงให้คุณ เพลิดเพลินไปกับเพลง ได้แม้อยู่ไกลบ้าน" classBg="im__003"/>
            <div className="content">
                <div className="sq-app sq-p --grid-view">
                    <Filter/>
                    <ProductList productURL={WirelessSpeakers}/>
                </div>
            </div>
            <SubscriptionSection/>
        </>
    );
}
