import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const HourlyItem = ({ time, main, temp }) => {
  return (
    <li className="hourly-item">
      <span>{time}</span>
      <Icon name={main} />
      <span>{temp}°C</span>
    </li>
  );
};

HourlyItem.propTypes = {
  time: PropTypes.string,
  main: PropTypes.string,
  temp: PropTypes.number,
};

export default HourlyItem;
