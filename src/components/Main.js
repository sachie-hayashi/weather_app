import React from 'react';
import locationIcon from '../assets/img/location.svg';
import weatherIcon from '../assets/img/sun.svg';
import ListHorizontal from './ListHorizontal';

const Main = () => {
  return(
    <div className="main">
      <div className="container-primary">
        {/* Location */}
        <h1 className="location">
          <img src={locationIcon} alt="location icon"/>
          <span className="ml-2">Vancouver, Canada</span>
        </h1>
        {/* Date & time */}
        <p className="time">Wednesday | May 29 | 4:30pm</p>
        <div className="main-content">
          {/* Weather icon */}
          <img src={weatherIcon} alt="weather icon" className="weather-icon" />
          {/* Temperature */}
          <span className="temp">23°C</span>
          {/* Description */}
          <span className="description">Sunny</span>
        </div>
        {/* <ListHorizontal /> */}
      </div>
      <div className="wavy-bg" />
    </div>  
  );
}

export default Main;