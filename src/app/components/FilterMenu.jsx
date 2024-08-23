// components/FilterMenu.js

import React, { useState } from 'react';
import Filter from './Filter'; // Assuming you have a separate Filter component

export default function FilterMenu({ filters }) {
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (filterName) => {
    setSelectedFilters((prevSelectedFilters) => ({
      ...prevSelectedFilters,
      [filterName]: !prevSelectedFilters[filterName],
    }));
  };

  return (
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
  );
}
