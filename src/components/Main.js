import React from 'react';
import Icon from './Icon';
// import ListHorizontal from './ListHorizontal';

const Main = () => {
  return(
    <div className="main">
      <div className="container-primary">
        {/* Location */}
        <h1 className="location">
          <Icon name="location" />
          <span className="ml-2">Vancouver, Canada</span>
        </h1>
        {/* Date & time */}
        <p className="time">Wednesday | May 29 | 4:30pm</p>
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
      <div className="wavy-bg" />
    </div>  
  );
}

export default Main;