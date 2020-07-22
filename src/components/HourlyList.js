import React from 'react';
import Icon from './Icon';

const HourlyList = () => {
  const listItems = (
    <li className="hourly-item">
      <span>Now</span>
      <Icon name="sun" />
      <span>23°C</span>
    </li>
  );

  return(
    <ul className="hourly-list">
      {listItems}
      {listItems}
      {listItems}
      {listItems}
      {listItems}
      {listItems}
      {listItems}
      {listItems}
      {listItems}
      {listItems}
      {listItems}
      {listItems}
    </ul>
  );
}

export default HourlyList;