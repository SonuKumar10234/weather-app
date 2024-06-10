import React from 'react';
import { useWeather } from '../context/WeatherContext';

const Search = () => {
  const { searchCity, setSearchCity, fetchWeather } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchCity) {
      fetchWeather(searchCity);
      setSearchCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex gap-2'>
      <input
        type="search"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        placeholder="Enter city or zip code"
        className='text-gray-500 border border-lighterGray outline-none px-2 py-2 rounded-md w-full'
      />
      <button type="submit" className='bg-lightBlue hover:bg-hoverBg hover:text-[white] text-[#1c1c1c] px-2 py-2 rounded-md transition-all duration-200'>Search</button>
    </form>
  );
};

export default Search;