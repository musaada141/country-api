import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Details from './components/Details';
import NavigationTop from './components/NavigationTop';
 


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <NavigationTop darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
        </Routes>

        <Routes>
        <Route path="/details/:alpha3Code" element={<Details darkMode={darkMode}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
