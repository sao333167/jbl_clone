import React from "react";
import Link from "next/link";

export default function PopularProduct() {
    return (
        <>
            <div className="">
                <div className="">
                    <div className="">
                        <h3>หมวดหมู่สินค้ายอดนิยม</h3>
                    </div>
                    <div className="">
                        <hr className="gf__separator"/>
                    </div>
                    <div className="owl-carousel owl-theme">
                        <div className="item">
                            <div className="item__content">
                                <div className="">
                                    <Link href="">
                                        <img src="" alt="" />
                                    </Link>
                                </div>
                                <div className="">
                                    <h4>ลำโพงไร้สาย</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
