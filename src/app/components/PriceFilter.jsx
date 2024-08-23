import React, { useState } from 'react'

export default function PriceFilter() {
    const [minPrice, setMinPrice] = useState(1390);
  const [maxPrice, setMaxPrice] = useState(11900);
  const handleSearch = () => {
    // Add the search functionality here
    console.log(`Searching for products between ${minPrice} and ${maxPrice}`);
  };
  return (

    <>
    <div className={'priceFilterMenu'}>
      <div className={'priceFilterTitle'}>
        <span className={'priceFilterTitleText'}>ราคา</span>
        <button className={ 'priceFilterToggleButton'}>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation" className={'priceFilterIcon'}><path d="M20 8.5 12.5 16 5 8.5" stroke="currentColor" strokeWidth="1.5" fill="none"></path></svg>
        </button>
      </div>
      <div className={'priceFilterInputs'}>
        <div className={'priceFilterInput'}>
          <label htmlFor="min-price" className={'priceFilterLabel'}>น้อยที่สุด</label>
          <div className={'priceFilterField'}>
            <span className={'priceFilterCurrency'}>฿</span>
            <input
              type="number"
              id="min-price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className={'priceFilterInputField'}
            />
          </div>
        </div>
        <div className={'priceFilterInput'}>
          <label htmlFor="max-price" className={'priceFilterLabel'}>มากที่สุด</label>
          <div className={'priceFilterField'}>
            <span className={'priceFilterCurrency'}>฿</span>
            <input
              type="number"
              id="max-price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className={'priceFilterInputField'}
            />
          </div>
        </div>
      </div>
      <button onClick={handleSearch} className={'priceFilterSearchButton'}>ค้นหา</button>
    </div>
    </>
  )
}
