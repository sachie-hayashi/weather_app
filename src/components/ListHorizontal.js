import React from 'react';
import Icon from './Icon';

const ListHorizontal = () => {
  const listItems = (
    <li className="list-horizontal-item">
      <span>Now</span>
      <Icon name="sun" />
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