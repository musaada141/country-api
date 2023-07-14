import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import NavigationTopStyles from '../styles/NavigationTopStyles.css';

const NavigationTop = ({ darkMode, toggleDarkMode }) => {
  const handleDarkModeToggle = () => {
    toggleDarkMode(!darkMode);
  };

  return (
    <div className={`navigationTop ${darkMode ? 'dark-mode' : ''}`}>
      <div className="logo">Where in the world?</div>
      <div className="right-navigation">
        <button className="dark-mode-button" onClick={handleDarkModeToggle}>
          {darkMode ? <FiSun /> : <FiMoon />} 
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default NavigationTop;
