import React, { useState } from 'react';
import MainContent from './MainContent';
import ErrContent from './ErrContent';
import Button from './Button';
import HourlyList from './HourlyList';
import { useSelector } from 'react-redux';
import findByDate from '../util/findByDate';
import getData from '../util/getData';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDesktop, selectedDate, weather, errors } = useSelector(
    state => state
  );
  const { city: location, current, daily } = weather;

  const isError = Object.values(errors).some(item => item);

  /* Location */
  const { name: city, country } = location;

  /* Weather & Date & Time */
  // Show current weather on load
  // If date is selected, show dily forecast for the selected date
  const selectedForecast = findByDate(daily, selectedDate); // Daily forecast for the selected date
  const data = selectedDate ? selectedForecast : current;
  const { date, time, weekday, main, temp } = getData(data);

  /* Handler */
  const handleClick = () => setIsOpen(prevState => !prevState);

  /* Styling */
  const background = main ? `bg-${main.toLowerCase()}` : '';

  return (
    <div className={`main ${background}`}>
      <div className="container-base">
        {isError ? (
          <ErrContent />
        ) : (
          <MainContent
            city={city}
            country={country}
            date={date}
            time={time}
            weekday={weekday}
            main={main}
            temp={temp}
          />
        )}
        {isOpen && !isDesktop && <HourlyList />}
      </div>
      <div className="wavy-bg">
        {!isDesktop && !isError && <Button onClick={handleClick} />}
      </div>
    </div>
  );
};

export default Main;
