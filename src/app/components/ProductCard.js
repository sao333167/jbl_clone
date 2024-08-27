"use client";

import React from 'react'
import Link from 'next/link';

const ProductCard = ({ product }) => {
    return (
        <>
            <div className="sq-results-item" key={product.id} product-id={product.id}>
                <div className="sparq-card" product-handle={product.path.split("/").pop()}>
                    <div className="sparq-thumbnail-wrap">
                        <div className="color-swatch-container" data-swatch-open="close">
                            {/* <div className="sq-palette">
                                {speaker.color.map((col, index) => (
                                    <span className="sq-pallete-item" key={index}>
                                    <span className="sq-pallete-color" title="Black" style={{ background: col.name }}></span>
                                    <div className="sq-tt-tooltip" role="tooltip" style={{ display: 'none' }}>
                                        Black
                                        <div className="sq-tooltip-arrow"></div>
                                    </div>
                                    </span>
                                ))}
                            </div> */}
                        </div>
                        <Link href={product.path} className="sparq-loop-product sq-class">
                            <div className="sq-image-swatch">
                                <div className="v-h"></div>
                                <div className="sq-sy-image">
                                    <img className="primary item-image" src={product.img} alt={product.title} />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="sparq-bottom">
                        <div className="sparq-bottom-items">
                            <div className="sparq-product-title">
                                <Link href={product.path} className="sparq-title">{product.title}</Link>
                            </div>
                            <div className="sq-product-price">
                                <span className="sq-price">฿{product.price.toLocaleString()}</span>
                                <span className="sq-compare-price">฿{product.compare.toLocaleString()}</span>
                                <span className="sq-discount-span" data-value={`${product.discount}%`}> Save </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard