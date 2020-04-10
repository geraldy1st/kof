import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <div className="main-search">
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);
