"use client";

import React,{ useState } from 'react'
import ProductCard from '@/app/components/ProductCard';


const ProductList = ({ productURL }) => {
    const [visibleCount, setVisibleCount] = useState(6);
    const [noDataText, setNoDataText] = useState('');

    const loadMore = () => {
        const newCount = visibleCount + 6;
        if (newCount >= productURL.length) {
          setNoDataText('ไม่พบข้อมูลที่ค้นหา');
        }
        setVisibleCount(newCount);
    };

    return (
        <>
            <div className="sparq-container">
                <div class="sparq-mobile-filter">
                    <div class="sq-dropdown-wrapper">
                        <div class="sq-sort">
                            <span class="sq-sort-label">ความเกี่ยวข้อง</span>
                            <span class="sq-sort-icon">
                                <div class="sq-icon sq-fa-per-page">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path class="sq-fa-per-page" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div class="sparq-mobile-filterby" onclick="toggleFilter &amp;&amp; toggleFilter()">
                        <span><span class="sq-filterby-icon"></span> Filter by</span>
                    </div>
                </div>
                <div className="sq-results">
                    {productURL.slice(0, visibleCount).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                {visibleCount < productURL.length && (
                    <div className="sq-load-more">
                        <div className="sq-pager-load-more" onClick={loadMore}>
                            <div>
                                <div className="empty">ไม่พบข้อมูลที่ค้นหา</div>
                            </div>
                        </div>
                    </div>
                )}
                {visibleCount >= productURL.length && noDataText && (
                    <div className="sq-load-more">
                        <div className="sq-pager-load-more" onClick={loadMore}>
                            <div>
                                <div className="empty">{noDataText}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductList