import React from 'react';

const ProductsHeader = () => {
  return (
    <div className="products-header">
      <div className="product-count">
        Showing 1 – 6 of 15 products
      </div>
      <div className="sort-dropdown">
        <label htmlFor="sort-by" className="sort-label">
          ค้นหาโดย
        </label>
        <select id="sort-by" className="sort-select">
          <option value="relevance">ความเกี่ยวข้อง</option>
          <option value="price-asc">ราคา : ต่ำ - สูง</option>
          <option value="price-desc">ราคา : สูง - ต่ำ</option>
          <option value="rating">ตัวอักษร ; A - Z</option>
          <option value="sort-z-a">ตัวอักษร : Z - A</option>
          <option value="">วันที่ : ใหม่ล่าสุด - เก่าที่สุด</option>
          <option value="">วันที่ : เก่าที่สุด - ใหม่ล่าสุด</option>
          <option value="">Best Seller</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsHeader;
