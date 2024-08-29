"use client"

import React, { useState } from "react";
import SubscriptionSection from '@/app/components/Subscription';
import Banner from '@/app/components/Banner';
import ProductCard from "@/app/components/ProductCard";
import Filter from '@/app/components/Filter';
import { WirelessSpeakers } from '@/app/data/WirelessSpeakers'

export default function BluetoothSpeakers() {
    const products = WirelessSpeakers[0].productlist;
    const [visibleItems, setVisibleItems] = useState(6);

    const loadMore = () => {
        if (visibleItems < products.length) {
          setVisibleItems(visibleItems + 6);
        } else {
          setVisibleItems(products.length);
        }
    };
    return (
        <>
            <Banner title="ลำโพงบลูทูธพกพา" subTitle="ด้วยอายุแบตเตอรี่ที่ยาวนานและเทคโนโลยีบลูทูธ ลำโพงไร้สายพกพาจาก JBL จึงให้คุณ เพลิดเพลินไปกับเพลง ได้แม้อยู่ไกลบ้าน" classBg="im__003"/>
            <div className="content">
                <div className="sq-app sq-p --grid-view">
                    <Filter/>
                    <div className="sparq-container">
                        <div className="sq-results">
                            {products.slice(0, visibleItems).map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                        {visibleItems < products.length ? (
                            <div className="sq-load-more">
                                <div className="sq-pager-load-more" onClick={loadMore}>
                                    <div>
                                        <div className="load-more-text">โหลดเพิ่มเติม</div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="sq-load-more">
                                <div className="sq-pager-load-more">
                                    <div>
                                        <div className="load-more-text">ไม่พบข้อมูลที่ค้นหา</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <SubscriptionSection/>
        </>
    );
}
