"use client"
import React, { useState } from 'react';
import Filter from './Filter';

const FilterMenu = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [minPrice, setMinPrice] = useState(1390);
  const [maxPrice, setMaxPrice] = useState(11900);

  const filters = [
    { name: 'Wireless', count: 8 },
    { name: 'Active Noise Cancelling', count: 5 },
    { name: 'Jbl Quantum Sound Signature', count: 5 },
    { name: 'Bluetooth', count: 4 },
    { name: 'Rgb Lighting In The Headset', count: 4 },
    { name: 'Adaptive Noise Cancelling', count: 1 },
    { name: 'Ambient Aware', count: 1 },
    { name: 'Microphone', count: 1 },
  ];
  

  const handleSearch = () => {
    // Add the search functionality here
    console.log(`Searching for products between ${minPrice} and ${maxPrice}`);
  };

  const handleFilterChange = (filterName) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  return (
    <>
    <div className="filter-menu">
      <div className="filter-title">
        <span>คุณสมบัติ ({Object.keys(selectedFilters).length})</span>
        <button className="toggle-button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            role="presentation"
            className="icon"
          >
            <path
              d="M20 8.5 12.5 16 5 8.5"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            ></path>
          </svg>
        </button>
      </div>
      <ul className="filter-list">
        {filters.map((filter) => (
          <Filter
            key={filter.name}
            filter={filter}
            handleFilterChange={handleFilterChange}
            isChecked={selectedFilters[filter.name] || false}
          />
        ))}
      </ul>
    </div>
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
    <div className={'colorFilterMenu'}>
      <div className={'colorFilterTitle'}>
        <span className={'colorFilterTitleText'}>สี</span>
        <button className={'colorFilterToggleButton'}>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation" className={'colorFilterIcon'}>
            <path d="M20 8.5 12.5 16 5 8.5" stroke="currentColor" strokeWidth="1.5" fill="none"></path>
          </svg>
        </button>
      </div>
      <div className={'colorFilterList'}>
        <div className={'colorFilterItem'}>
          <span className={'colorCircle'} style={{ backgroundColor: 'black' }}></span>
          <span className={'colorLabel'}>Black</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default FilterMenu;
