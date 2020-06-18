import React from 'react';
import weatherIcon from '../assets/img/sun.svg';

const ListHorizontal = () => {
  const listItems = (
    <li className="list-horizontal-item">
      <span>Now</span>
      <img src={weatherIcon} alt="weather icon"/>
      <span>23°C</span>
    </li>
  );

  return(
    <ul className="list-horizontal">
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

export default ListHorizontal;