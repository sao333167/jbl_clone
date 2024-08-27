import React from 'react'
import Banner from '@/app/components/Banner'
import SubscriptionSection from "@/app/components/Subscription";
import Filter from '@/app/components/Filter';
import ProductList from '@/app/components/ProductList';
import { PartyboxSpeakers } from '@/app/data/partyboxSpeakers';

const page = () => {
    return (
        <>
            <Banner title="ลำโพงปาร์ตี้" subTitle="สนุกไปกับงานปาร์ตี้ด้วยลำโพง JBL Partybox รองรับการเชื่อมต่อแบบ Bluetooth พร้อมแสงไฟเอฟเฟคที่ซิงค์กับจังหวะเพลง" classBg="im__002"/>
            <div className="content">
                <div className="sq-app sq-p --grid-view">
                    <Filter/>
                    <ProductList productURL={PartyboxSpeakers}/>
                </div>
            </div>
            <SubscriptionSection/>
        </>
    )
}

export default page