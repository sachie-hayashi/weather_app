import React from 'react';
import Icon from './Icon';

const DailyList = () => {
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
    <Icon name="sun" className="list-item-img" />
  </li>    
  );

  return(
    <div className="container-base">
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

export default DailyList;