import React from 'react';
import weatherIcon from '../assets/img/sun.svg';

const List = () => {
  return(
    <div className="container">
      <ul className="list">
        <li className="list-item">
          <div className="list-item-title">
            <span>Wednesday</span>
            <span className="list-item-subtitle">Today</span>
          </div>
          <div className="list-item-content">
            <span>23°C | </span>
            <span className="text-light-gray">13°C</span>
          </div>
          <img src={weatherIcon} alt="weather icon" className="list-item-img"/>
        </li>
      </ul>
    </div>
  );
}

export default List;