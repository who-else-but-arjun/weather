import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import './WeatherCard.css';

const TemperatureSummaryCard = ({ TemperatureSummary }) => {
  return (
    <div className="weather-card">
      <div className="header">
        <FontAwesomeIcon icon={faChartLine} className="icon" />
        <h3 className="title">Temperature Summary</h3>
      </div>
      <div className="details">
        <div>
          <p className="apt">Past 6 Hours:</p>
          <p className="data">{TemperatureSummary.Past6HourRange.Minimum.Metric.Value}°C - {TemperatureSummary.Past6HourRange.Maximum.Metric.Value}°C</p>
        </div>
        <div>
          <p className="apt">Past 12 Hours:</p>
          <p className="data">{TemperatureSummary.Past12HourRange.Minimum.Metric.Value}°C - {TemperatureSummary.Past12HourRange.Maximum.Metric.Value}°C</p>
        </div>
        <div>
          <p className="apt">Past 24 Hours:</p>
          <p className="data">{TemperatureSummary.Past24HourRange.Minimum.Metric.Value}°C - {TemperatureSummary.Past24HourRange.Maximum.Metric.Value}°C</p>
        </div>
      </div>
    </div>
  );
};

export default TemperatureSummaryCard;
