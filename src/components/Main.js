import React from 'react';
import Icon from './Icon';
import Button from './Button';
import HourlyList from './HourlyList';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDesktop } = useSelector(state => state);

  const handleClick = () => setIsOpen(prevState => !prevState);

  return (
    <div className="main">
      <div className="container-base">
        <div className="main-title">
          {/* Location */}
          <h1 className="location">
            <Icon name="location" />
            <span className="ml-2">Vancouver, Canada</span>
          </h1>
          {/* Date & time */}
          <p className="time">Wednesday | May 29 | 4:30pm</p>
        </div>
        <div className="main-content">
          {/* Weather icon */}
          <Icon name="sun" className="weather-icon" />
          {/* Temperature */}
          <span className="temp">23°C</span>
          {/* Description */}
          <span className="description">Sunny</span>
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
