import React from 'react';
import Icon from './Icon';
import Button from './Button';
import HourlyList from './HourlyList';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import findByDate from '../util/findByDate';
import getData from '../util/getData';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDesktop, selectedDate, weather } = useSelector(state => state);
  const { city: location, current, daily } = weather;

  /* Location */
  const { name: city, country } = location;

  /* Weather & Date & Time */
  // Show current weather on load
  // If date is selected, show dily forecast for the selected date
  const selectedForecast = findByDate(daily, selectedDate); // Daily forecast for the selected date
  const data = selectedDate ? selectedForecast : current;
  const { date, time, weekday, main, temp } = getData(data);

  /* Handler */
  const handleClick = () => setIsOpen(prevState => !prevState);

  return (
    <div className="main">
      <div className="container-base">
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
        {isOpen && !isDesktop && <HourlyList />}
      </div>
      <div className="wavy-bg">
        {!isDesktop && <Button onClick={handleClick} />}
      </div>
    </div>
  );
};

export default Main;
