import React from 'react'
import Banner from '@/app/components/Banner'
import SubscriptionSection from "@/app/components/Subscription";
import Link from 'next/link';

const page = () => {
    return (
        <>
            <Banner title="ลำโพงปาร์ตี้" subTitle="สนุกไปกับงานปาร์ตี้ด้วยลำโพง JBL Partybox รองรับการเชื่อมต่อแบบ Bluetooth พร้อมแสงไฟเอฟเฟคที่ซิงค์กับจังหวะเพลง" classBg="im__002"/>
            <div className="content">
                <div className="left">

                </div>
                <div className="right">
                    <div className="">
                        <div class="sq-results-item">
                            <div class="sparq-card" product-handle="jbl-partybox-ultimate">
                                <div class="sparq-thumbnail-wrap">
                                    <div class="color-swatch-container" data-swatch-open="close">
                                        <div class="sq-palette"><span class="sq-pallete-item"><span class="sq-pallete-color" title="Black" style={{ background: 'rgb(0, 0, 0)'}}></span>
                                            <div class="sq-tt-tooltip" role="tooltip" style={{ display: 'none'}}>Black<div class="sq-tooltip-arrow"></div>
                                            </div></span>
                                        </div>
                                    </div><a href="/products/jbl-partybox-ultimate" class="sparq-loop-product sq-class">
                                        <div class="sq-image-swatch">
                                            <div class="v-h"></div>
                                            <div class="sq-sy-image">
                                                <img class="primary item-image" src="https://cdn.shopify.com/s/files/1/0790/6263/0676/files/JBL_PARTYBOX_ULTIMATE_HERO_535x535_b9fcd415-5e51-4047-9e14-fbffcff9e577_900x.png?v=1707797360"/>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="sparq-bottom">
                                    <div class="sparq-bottom-items">
                                        <div class="sparq-product-title"><Link href="/products/jbl-partybox-ultimate" class="sparq-title">JBL PartyBox Ultimate</Link></div>
                                        <div class="sq-product-price"><span class="sq-price"> ฿59,900.00</span><span class="sq-compare-price"> ฿90000.00</span><span class="sq-discount-span" data-value="33%"> Save </span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SubscriptionSection/>
        </>
    )
}

export default page