import React from 'react';
import { useWeather } from '../context/WeatherContext';
import WeatherInfo from './WeatherInfo';

const CurrentWeather = () => {
  const {currentWeather, currWeatherErr, loadingCurrLoc} = useWeather();

  return (
    <div className="weather-container text-center sm:text-justify sm:border-r sm:border-borderColor p-4 min-w-full sm:min-w-[50%]">
      {currWeatherErr && <p className="text-red mt-2">{currWeatherErr}</p>}
      {<WeatherInfo weather={currentWeather} loadingCurrLoc={loadingCurrLoc}/>}
      <div className='mt-5'>
      <p className='dark:text-[white]'>Developed by <span className='font-semibold'>Sonu Kumar</span> {"|"} Frontend Developer </p>
      </div>
    </div>
  );
};

export default CurrentWeather;