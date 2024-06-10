import { createContext, useContext, useEffect, useState } from "react";
import { getWeatherDataFromServer } from "../api";

//creating weather context
const WeatherContext = createContext(null);

//creating weather provider
export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [loadingCurrLoc, setLoadingCurrLoc] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); 
    const [currWeatherErr, setCurrWeatherErr] = useState(null); 
    const [searchCity, setSearchCity] = useState('');

    useEffect(() => {
        const fetchCurrentLocationWeather = () => {
            // getting permission of current lacation of the user
            if (navigator.geolocation) {
                setLoadingCurrLoc(true);
                navigator.geolocation.getCurrentPosition(async (position) => {
                    //If user allow location service then will fetch data & send it to get-weather function.
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await getWeatherDataFromServer(null, latitude, longitude);
                        setCurrentWeather(response);
                        setCurrWeatherErr(null);
                    } catch (error) {
                        console.error(error);
                        setCurrWeatherErr('Error fetching weather data for current location');
                    } finally {
                        setLoadingCurrLoc(false);
                    }
                }, async (error) => {
                     //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
                    try {
                        const response = await getWeatherDataFromServer(null, 28.6128, 77.2311);
                        setCurrentWeather(response);
                        setCurrWeatherErr(null);
                    } catch (error) {
                        console.error(error);
                        setCurrWeatherErr('Something went wrong! Please try again.');
                    } finally {
                        setLoadingCurrLoc(false);
                    }
                    console.error(error);
                });
            } else {
                console.error("Geolocation is not supported by this browser.");
            }
        };

        fetchCurrentLocationWeather();
    }, []);

    const fetchWeather = async () => {
        setLoading(true);
        try {
            const response = await getWeatherDataFromServer(searchCity);
            setData(response);
            setError('');
        } catch (error) {
            setError('Invalid location or network error!!');
            setData(null)
        } finally {
            setLoading(false);
        }
    }

    return (
        <WeatherContext.Provider value={{ currentWeather, data, loadingCurrLoc, loading, currWeatherErr, error, searchCity, setSearchCity, fetchWeather, }}>
            {props.children}
        </WeatherContext.Provider>
    )
}

// custom hook
export const useWeather = () => {
    return useContext(WeatherContext);
}