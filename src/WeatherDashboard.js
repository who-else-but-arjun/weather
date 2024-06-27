import React from 'react';
import CurrentWeatherCard from './CurrentWeatherCard';
import TemperatureSummaryCard from './TemperatureSummaryCard';
import PrecipitationCard from './PrecipitationCard';
import './WeatherDashboard.css';

const WeatherDashboard = ({ weatherData }) => {
  const {
    cityName,
    Temperature,
    RealFeelTemperature,
    RelativeHumidity,
    UVIndex,
    UVIndexText,
    TemperatureSummary,
    PrecipitationSummary,
    WeatherIcon,
    WeatherText
  } = weatherData;

  return (
    <div className="weather-dashboard">
      <CurrentWeatherCard
        cityName={cityName}
        Temperature={Temperature}
        RealFeelTemperature={RealFeelTemperature}
        RelativeHumidity={RelativeHumidity}
        UVIndex={UVIndex}
        UVIndexText={UVIndexText}
        WeatherIcon={WeatherIcon}
        WeatherText={WeatherText}
      />
      <div className="weather-cards">
        <TemperatureSummaryCard TemperatureSummary={TemperatureSummary} />
        <PrecipitationCard PrecipitationSummary={PrecipitationSummary} />
      </div>
    </div>
  );
};

export default WeatherDashboard;
