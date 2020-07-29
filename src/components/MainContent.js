import React from 'react';
import Icon from './Icon';

const MainContent = ({ city, country, date, time, weekday, main, temp }) => {
  return (
    <>
      <div className="main-title">
        {/* Location */}
        {city && country && (
          <h1 className="location">
            <Icon name="location" />
            <span className="ml-2">
              {city}, {country === 'CA' ? 'Canada' : country}
            </span>
          </h1>
        )}
        {/* Date & time */}
        {weekday && date && time && (
          <p className="time">
            {weekday} | {date} | {time.main}
          </p>
        )}
      </div>
      <div className="main-content">
        {/* Weather icon */}
        <Icon name={main && main.toLowerCase()} className="weather-icon" />
        {/* Temperature */}
        <span className="temp">{temp && `${Math.round(temp)}°C`}</span>
        {/* Description */}
        <span className="description">{main}</span>
      </div>
    </>
  );
};

export default MainContent;
