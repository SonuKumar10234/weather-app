import axios from "axios";

const APIkey = 'bcf2048bc3be154bded8f277f580ba2e';

// getWeatherDataFromServer fetch the weather data from server
export const getWeatherDataFromServer = async (city, lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?appid=${APIkey}&units=metric`;
    if (city) {
        url += `&q=${city}`;
    } else if (lat && lon) {
        url += `&lat=${lat}&lon=${lon}`;
    }
    const response = await axios.get(url);
    return response.data;
}