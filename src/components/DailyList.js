import React, { useCallback } from 'react';
import DailyItem from './DailyItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectDate } from '../actions';
import getData from '../util/getData';

const DailyList = () => {
  const { daily } = useSelector(state => state.weather);
  const dispatch = useDispatch();

  const handleClick = useCallback(
    event => dispatch(selectDate(event.target.dataset.date)),
    [dispatch]
  );

  const items = daily.slice(0, 5).map(item => {
    const { date, weekday, main } = getData(item);
    return (
      <DailyItem
        key={item.dt}
        date={date}
        weekday={weekday}
        main={main.toLowerCase()}
        tempMin={Math.round(item.temp.min)}
        tempMax={Math.round(item.temp.max)}
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
