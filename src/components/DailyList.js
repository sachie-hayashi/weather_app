import React, { useCallback } from 'react';
import DailyItem from './DailyItem';
import formatDate from '../util/formatDate';
import getDateTime from '../util/getDateTime';
import { useSelector, useDispatch } from 'react-redux';
import { selectDate } from '../actions';

const DailyList = () => {
  const { daily } = useSelector(state => state.weather);
  const dispatch = useDispatch();

  const handleClick = useCallback(
    event => dispatch(selectDate(event.target.dataset.date)),
    [dispatch]
  );

  const items = daily.slice(0, 5).map(({ dt, weather, temp }) => {
    const date = formatDate(dt);
    const { weekday } = getDateTime(dt);
    const { main } = weather[0];
    return (
      <DailyItem
        key={dt}
        date={date}
        weekday={weekday}
        main={main.toLowerCase()}
        tempMin={Math.round(temp.min)}
        tempMax={Math.round(temp.max)}
        onClick={handleClick}
      />
    );
  });

  return (
    <div className="container-base">
      <ul className="list">{items}</ul>
    </div>
  );
};

export default DailyList;
