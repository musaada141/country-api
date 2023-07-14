import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from './data.json';
import HomeStyles from './styles/Home.css';
import Navigation from './components/Navigation';

const Home = ({ darkMode }) => {
  const itemsPerPage = 8; // 4 rows x 2 columns = 8 items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handleRegionFilter = (event) => {
    setSelectedRegion(event.target.value);
    setCurrentPage(1); // Reset to the first page when applying a filter
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter the data based on the search query and selected region
  const filteredData = data.filter((country) => {
    return (
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedRegion === '' || country.region === selectedRegion)
    );
  });

  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <div className={`home ${darkMode ? 'dark-mode' : ''} `}>
      <Navigation
        searchQuery={searchQuery}
        onSearch={handleSearch}
        selectedRegion={selectedRegion}
        onRegionFilter={handleRegionFilter}
        className={`Navigation ${darkMode ? 'dark-mode' : ''} `}
      />
      <div className={`card-row ${darkMode ? 'dark-mode' : ''}`}>
        {currentData.map((country) => (
          <Link
            to={`/details/${country.alpha3Code}`}
            className={`card ${darkMode ? 'dark-mode' : ''}`}
            key={country.alpha3Code}
            style={{ textDecoration: 'none' }} // Remove link decorations
          >
            <div className="card-image">
              <img src={country.flags.png} alt={country.name} />
            </div>
            <div className="card-details">
              <h3>{country.name}</h3>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
