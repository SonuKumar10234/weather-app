import React from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const Toggle = ({ setIsDarkTheme, isDarkTheme }) => {
  return (
    <button onClick={()=>setIsDarkTheme(!isDarkTheme)} className='h-8 px-2 hover:bg-zincLighter rounded-md transition-all duration-200'>
      {isDarkTheme  ? (
        <MdOutlineLightMode size={22} />
      ) : (
        <MdOutlineDarkMode size={22} />
      )}
    </button>
  );
};

export default Toggle;