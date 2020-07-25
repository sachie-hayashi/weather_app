import React from 'react';
import HourlyItem from './HourlyItem';
import { useSelector } from 'react-redux';
import groupByDate from '../util/groupByDate';
import formatTime from '../util/formatTime';

const HourlyList = () => {
  const { selectedDate, weather } = useSelector(state => state);
  const { every3hour } = weather;
  const every3hourByDate = groupByDate(every3hour);
  const day1 = Object.keys(every3hourByDate)[0];

  let data;
  // If selected date is 1st day or not selected,
  // use first 8 objects in every3hour(not grouped by date) array
  if (!selectedDate || selectedDate === day1) {
    data = every3hour.slice(0, 8);
  } else {
    data = every3hourByDate[selectedDate];
  }

  const items = data.map(({ dt, main, weather }) => (
    <HourlyItem
      key={dt}
      time={formatTime(dt, true)}
      main={weather[0].main.toLowerCase()}
      temp={Math.floor(main.temp)}
    />
  ));

  return <ul className="hourly-list">{items}</ul>;
};

export default HourlyList;
