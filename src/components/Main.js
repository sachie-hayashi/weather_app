import React from 'react';
import locationIcon from '../assets/img/location.svg';
import weatherIcon from '../assets/img/sun.svg';

const Main = () => {
  return(
    <div className="main">
      <div className="container">
        <h1 className="location">
          <img src={locationIcon} alt="location icon"/>
          <span className="ml-2">Vancouver, Canada</span>
        </h1>
        <p className="time">Wednesday | May 29 | 4:30pm</p>
        <div className="main-content">
          <img src={weatherIcon} alt="weather icon" className="weather-icon" />
          <div className="info">
            <span className="temp">23°C</span>
            <span className="description">Sunny</span>
          </div>
        </div>
      </div>
      <div className="wavy-bg" />
    </div>  
  );
}

export default Main;