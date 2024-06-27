import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faSun } from '@fortawesome/free-solid-svg-icons';
import './CurrentWeatherCard.css';

const CurrentWeatherCard = ({ cityName, Temperature, RealFeelTemperature, RelativeHumidity, UVIndex, UVIndexText, WeatherIcon, WeatherText }) => {
  const iconUrl = `https://developer.accuweather.com/sites/default/files/${WeatherIcon < 10 ? '0' : ''}${WeatherIcon}-s.png`;

  return (
    <div className="current-weather-card">
      <div className="city-name">{cityName}</div>
      <div className="weather-icon">
        <img src={iconUrl} alt={WeatherText} />
      </div>
      <div className="temperature">
        {Temperature.Metric.Value}°C
      </div>
      <div className="feels-like">
        Feels like: {RealFeelTemperature.Metric.Value}°C
      </div>
      <div className="bottom-left">
        <FontAwesomeIcon icon={faTint} /> {RelativeHumidity}%
      </div>
      <div className="bottom-right">
        <FontAwesomeIcon icon={faSun} /> UV: {UVIndex} ({UVIndexText})
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
