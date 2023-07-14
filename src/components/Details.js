import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data.json'
import { FaArrowLeft } from 'react-icons/fa';
import DetailStyles from '../styles/DetailStyles.css'
const Details = () => {
  const { alpha3Code } = useParams();

  // Find the country details using alpha3Code
  const country = data.find((country) => country.alpha3Code === alpha3Code);

  if (!country) {
    return <div>Loading...</div>; // Add appropriate loading state
  }

  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  return (
    <div className='details'>
      <div className="left-section">
        {/* Link back to home */}
      <Link to="/" className="back-to-home">
        <FaArrowLeft className="arrow-icon" />
        <button className="btn">Back</button>
      </Link>
      {/* Display country flag */}
      <div>
        <img src={country.flags.png} alt={country.name} className='img'/>
      </div>
      </div>

      <div className='right-section'>
        {/* Display country details */}
  
      <div>
      <h1 className="mb-5 font-extrabold text-3xl">{name}</h1>
      <h2 className='font-bold'>Native Name: <span className="font-normal">{nativeName}</span></h2>
      <p className="font-bold">Population: <span className="font-normal">{population}</span></p>
      <p className='font-bold'>Region: <span className="font-normal">{region}</span></p>
      <p className='font-bold'>Subregion: <span className="font-normal">{subregion}</span></p>
      <p className='font-bold'>Capital: <span className="font-normal">{capital}</span></p>
      </div>
      
      
      <div className='mt-12 right-right-side' >
      <p className='font-bold'>Top Level Domain: <span className="font-normal">{topLevelDomain}</span></p>
      <p className='font-bold'>Currencies: <span className="font-normal">{currencies[0].name}</span></p>
      <p className='font-bold'>Languages: <span className="font-normal">{languages[0].name}</span></p>
      </div>

      <div className="border-countries flex font-bold bottom">
        <p className='fit-content '>Border Countries:</p>
          {country.borders && country.borders.length > 0? (
            <div className="flex flex-wrap gap-2 spac">
              {country.borders.map((border) => (
            <button key={border} className="btn2 font-normal">{border}</button>))}
            </div>) : (<p className="mx-1 mb-10 font-normal">None</p>)}
      </div>
    
      </div>
    
    </div>

    
  );
};

export default Details;
