import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherDashboard from './WeatherDashboard';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [dateTime, setDateTime] = useState('');

  const fetchWeather = async () => {
    setError('');
    setWeather(null); 
    try {
      const locationResponse = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search`, {
        params: {
          apikey: '7b52VjJNR7MZo0R40h2857SxI4Awfdyc',
          q: city
        }
      });

      if (locationResponse.data.length === 0) {
        setError('City not found');
        return;
      }

      const locationKey = locationResponse.data[0].Key;
      const cityName = locationResponse.data[0].LocalizedName;
      
      const weatherResponse = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`, {
        params: {
          apikey: '7b52VjJNR7MZo0R40h2857SxI4Awfdyc',
          details: true
        }
      });

      if (weatherResponse.data.length === 0) {
        setError('Weather data not found');
        return;
      }

      setWeather({
        ...weatherResponse.data[0],
        cityName
      });
      setError(null);
    } catch (err) {
      setError('Unable to fetch weather data. Please check the city name and try again.');
      setWeather(null);
    }
  };

  useEffect(() => {
    const now = new Date();
    setDateTime(now.toLocaleString());
  }, [weather]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col p-4">
      <div className="flex justify-center mb-8">
        <div className="search-input-container">
          <i className="fas fa-search"></i>
          <input
            type="text"
            className="p-3 border-none focus:outline-none"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
        </div>
        <button
          className="p-3 bg-purple-600 text-white rounded-lg ml-2 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200 ease-in-out transform hover:scale-105"
          onClick={fetchWeather}
        >
          Get Weather
        </button>
      </div>
      <div className="text-white text-lg text-center mb-4">
        {dateTime}
      </div>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {weather && <WeatherDashboard weatherData={weather} />}
    </div>
  );
};

export default App;
