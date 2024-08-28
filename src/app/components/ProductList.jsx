"use client";

import React,{ useState } from 'react'
import ProductCard from '@/app/components/ProductCard';

const ProductList = ({ productURL }) => {
    const [visibleCount, setVisibleCount] = useState(6);
    const [noDataText, setNoDataText] = useState('');

    const loadMore = () => {
        const newCount = visibleCount + 6;
        if (newCount >= productURL.productlist.length) {
          setNoDataText('ไม่พบข้อมูลที่ค้นหา');
        }
        setVisibleCount(newCount);
    };

    if (productURL.productlist) {
        return (
            <>
                <div className="sparq-container">
                    <div className="sparq-mobile-filter">
                        <div className="sq-dropdown-wrapper">
                            <div className="sq-sort">
                                <span className="sq-sort-label">ความเกี่ยวข้อง</span>
                                <span className="sq-sort-icon">
                                    <div className="sq-icon sq-fa-per-page">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path className="sq-fa-per-page" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="sparq-mobile-filterby">
                            <span><span className="sq-filterby-icon"></span> Filter by</span>
                        </div>
                    </div>
                    <div className="sq-results">
                        {productURL.productlist.slice(0, visibleCount).map((product) => {
                            return (
                                <ProductCard key={product.id} productItem={product} />
                            );
                        })}
                    </div>
                    {visibleCount < productURL.productlist.length && (
                        <div className="sq-load-more">
                            <div className="sq-pager-load-more" onClick={loadMore}>
                                <div>
                                    <div className="empty">ไม่พบข้อมูลที่ค้นหา</div>
                                </div>
                            </div>
                        </div>
                    )}
                    {visibleCount >= productURL.productlist.length && noDataText && (
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

    
}

export default ProductList