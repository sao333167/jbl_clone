// components/SliderBarOption.js

import React from 'react';

export default function Filter({ filter, handleFilterChange, isChecked }) {
    
  return (
    <li className="filter-item">
      <label className="filter-label">
        <div className="filter-checkbox-container">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => handleFilterChange(filter.name)}
            className="filter-checkbox"
          />
          {filter.name}
        </div>
        <span className="filter-count">[{filter.count}]</span>
      </label>
    </li>
  );
}
