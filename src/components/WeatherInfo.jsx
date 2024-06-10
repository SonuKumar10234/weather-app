import React from 'react';
import { format } from 'date-fns';
import { MdLocationOn } from 'react-icons/md';
import { FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import loader from '../assets/WeatherIcons.gif'

const WeatherInfo = ({ weather, loadingCurrLoc, loading }) => {
  const { name, main, sys, weather: weatherDetails, wind } = weather || {};
  const date = format(new Date(), 'PPPP p');

  if (loadingCurrLoc || loading) {
    return (
      <div className="flex flex-col items-center bg-lightGray dark:bg-cardBg text-[white] px-3 py-3 rounded-md shadow-md">
        <img src={loader} className='w-1/2' style={{ WebkitUserDrag: "none" }} alt="Loading" />
        <h3 className='text-2xl font-semibold'>
          {loadingCurrLoc ? 'Detecting your location' : 'Fetching weather data'}
        </h3>
        <h3 className='mt-4 text-center'>
          {loadingCurrLoc ? 
          `Your current location will be displayed on the App
           & used for calculating real-time weather.`
          :
          'Please wait while we fetch the weather data for the selected location.'
        }
        </h3>
      </div>
    );
  }

  if (!weather) {
    return null;
  }
  return (

    <div className="weather-info dark:bg-cardBg text-[#1c1c1c] dark:text-[white] px-3 py-3 rounded-md shadow-lg">

      <div className='flex flex-col justify-center items-center sm:items-start'>
        <h2 className='text-white text-nowrap mt-2 flex gap-1 text-primary dark:text-[white]'><MdLocationOn size={23} />{name}, <span>{sys.country}</span></h2>
        <img src={`https://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`} alt={weatherDetails && weatherDetails[0].description} style={{ WebkitUserDrag: "none" }}/>
      </div>
      <p className='text-white text-5xl mt-2'>{parseInt(main?.temp)}°C</p>
      <p className='text-white mt-2'>{date}</p>
      <p className='text-white mt-2'>Condition: {weatherDetails && weatherDetails[0].description}</p>
      <div className='flex gap-3 justify-center sm:justify-start mt-6'>
        <div className='flex flex-col justify-center items-center bg-lightGray text-[white] dark:bg-humidityBg border-t-2 border-[orange] dark:border-lightPrimary rounded-md p-4 text-center mt-2'>
          <WiHumidity size={36} color='' />
          <h2>Humidity</h2>
          <h2>{main?.humidity}%</h2>
        </div>
        <div className='flex flex-col justify-center items-center bg-primary text-[white] dark:bg-windBg border-t-2 border-[orange] dark:border-lightPrimary rounded-md p-4 text-center mt-2'>
          <FaWind size={24} color='' />
          <p className='mt-2'>Wind Speed</p>
          <h2>{wind?.speed} m/s</h2>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;