import React from 'react';
import Icon from './Icon';
import Button from './Button';
// import ListHorizontal from './ListHorizontal';

const Main = () => {
  return(
    <div className="main">
      <div className="base-container">
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
        {/* <ListHorizontal /> */}
      </div>
      <div className="wavy-bg">
        <Button />
      </div>
    </div>  
  );
}

export default Main;