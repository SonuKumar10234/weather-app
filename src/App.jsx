import React from 'react';
import Toggle from './components/Toggle';
import './App.css';
import { useTheme } from './context/ThemeContext';
import SearchedWeather from './components/SearchedWeather';
import CurrentWeather from './components/CurrentWeather';

const App = () => {
  const { isDarkTheme, setIsDarkTheme } = useTheme();

  return (
    <div className={`app dark:bg-[#1A202C]`}>
      <header className='flex justify-between items-center border-b border-borderColor bg-[white] dark:bg-[#1A202C] dark:text-[white] h-[56px] px-3'>
        <h1>Weather App</h1>
        <Toggle setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      </header>
      <main className='flex flex-col sm:flex-row gap-4 h-full sm:h-[calc(100vh_-_56px)] max-w-4xl mx-auto'>
        <CurrentWeather />
        <hr className='border sm:border-0 border-borderColor opacity-60'/>
        <SearchedWeather />
      </main>
    </div>
  );
};

export default App;