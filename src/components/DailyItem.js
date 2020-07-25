import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import formatDate from '../util/formatDate';
import { useSelector } from 'react-redux';
import { Today } from '../actions';

const DailyItem = ({ date, weekday, main, tempMin, tempMax, onClick }) => {
  const { selectedDate } = useSelector(state => state);
  const today = formatDate(Math.floor(Date.now() / 1000));

  return (
    <li data-date={date} onClick={onClick} className="list-item">
      {selectedDate === date && <div className="arrow" />}
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
  date: PropTypes.string,
  weekday: PropTypes.string,
  main: PropTypes.string,
  tempMin: PropTypes.number,
  tempMax: PropTypes.number,
  onClick: PropTypes.func,
};

export default DailyItem;
