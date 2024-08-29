import React from 'react'
import Link from 'next/link'

export default function BestSellingProducts() {
    return (
        <>
            <div className="">
                <div className="">
                    <div>
                        <div className="tit_heading">
                            <h3>สินค้าขายดี</h3>
                        </div>
                        <div className="">
                            <hr className="gf_separator"/>
                        </div>
                    </div>
                    <div className="carousel_product">
                        <div className="owl-carousel owl-theme">
                            <div className="owl__item">
                                <div className="item">
                                    <div className="item__content">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
