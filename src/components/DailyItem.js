import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import formatDate from '../util/formatDate';
import { useSelector } from 'react-redux';
import { Today } from '../actions';

const DailyItem = props => {
  const { index, date, weekday, main, tempMin, tempMax, onClick } = props;
  const { selectedDate } = useSelector(state => state);
  const today = formatDate(Math.floor(Date.now() / 1000));

  // Show an arrow for 1st day on load
  // If date is selected, show an arrow for the selected date
  const isArrow = (!selectedDate && index === 0) || selectedDate === date;

  return (
    <li data-date={date} onClick={onClick} className="list-item">
      {isArrow && <div className="arrow" />}
      <div className="list-item-title">
        <span>{weekday}</span>
        <span className="list-item-subtitle">
          {date === today ? Today : date}
        </span>
      </div>
      <div className="list-item-content">
        <span>{tempMax}°C | </span>
        <span className="text-light-gray">{tempMin}°C</span>
      </div>
      <Icon name={main} className="list-item-img" />
    </li>
  );
};

DailyItem.propTypes = {
  index: PropTypes.number,
  date: PropTypes.string,
  weekday: PropTypes.string,
  main: PropTypes.string,
  tempMin: PropTypes.number,
  tempMax: PropTypes.number,
  onClick: PropTypes.func,
};

export default DailyItem;
