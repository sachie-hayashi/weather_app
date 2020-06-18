import React from 'react';
import weatherIcon from '../assets/img/sun.svg';

const List = () => {
  const listItems = (
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
  );

  return(
    <div className="container-primary">
      <ul className="list">
        {listItems}
        {listItems}
        {listItems}
        {listItems}
        {listItems}
      </ul>
    </div>
  );
}

export default List;