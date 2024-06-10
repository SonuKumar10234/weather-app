import React from 'react'
import Search from './Search'
import { useWeather } from '../context/WeatherContext';
import WeatherInfo from './WeatherInfo';

const SearchedWeather = () => {
    const {data, loading, error} = useWeather();
  return (
    <div className='flex flex-col text-center sm:text-justify gap-4 px-4 sm:px-2 py-4 w-full'>
        <Search />
        {error && <p className="text-red mt-2">{error}</p>}
        {<WeatherInfo weather={data} loading={loading}/>}
    </div>
  )
}

export default SearchedWeather;