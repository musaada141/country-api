import React from 'react';
import NavigationStyles from '../styles/Navigation.css'
const Navigation = ({ searchQuery, onSearch, selectedRegion, onRegionFilter, darkMode }) => {
  return (
    <div className="navigation">
    {/* // <div className={`navigation ${darkMode ? 'dark-mode' : ''}`}> */}
      <div className="search-bar">
      <span className="search-icon" role="img" aria-label="Search">
      🔍
      </span>
        <input
          type="text"
          value={searchQuery}
          onChange={onSearch}
          placeholder="Search for a country..."

        />
      </div>
      <div className="filter-bar">
      {/* <div className={`filter-bar ${darkMode ? 'dark-mode' : ''}`}> */}
        <select value={selectedRegion} onChange={onRegionFilter}>
          <option value="">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Navigation;
