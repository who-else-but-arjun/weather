import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import './WeatherCard.css';

const PrecipitationCard = ({ PrecipitationSummary }) => {
  return (
    <div className="weather-card">
      <div className="header">
        <FontAwesomeIcon icon={faCloudRain} className="icon" />
        <h3 className="title">Precipitation</h3>
      </div>
      <div className="details">
        <div>
          <p className="apt">Past Hour:</p>
          <p className="data">{PrecipitationSummary.PastHour.Metric.Value} mm</p>
        </div>
        <div>
          <p className="apt">Past 3 Hours:</p>
          <p className="data">{PrecipitationSummary.Past3Hours.Metric.Value} mm</p>
        </div>
        <div>
          <p className="apt">Past 6 Hours:</p>
          <p className="data">{PrecipitationSummary.Past6Hours.Metric.Value} mm</p>
        </div>
        <div>
          <p className="apt">Past 12 Hours:</p>
          <p className="data">{PrecipitationSummary.Past12Hours.Metric.Value} mm</p>
        </div>
        <div>
          <p className="apt">Past 24 Hours:</p>
          <p className="data">{PrecipitationSummary.Past24Hours.Metric.Value} mm</p>
        </div>
      </div>
    </div>
  );
};

export default PrecipitationCard;
