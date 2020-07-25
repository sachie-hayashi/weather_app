import formatDate from './formatDate';
import formatTime from './formatTime';
import getDateTime from './getDateTime';
import isEmpty from './isEmpty';

/**
 * Get weather & time data from single data object
 * @param {Object} obj an object in daily, every3hour or daily array or value of current
 * @return {Object}
 */

const getData = obj => {
  if (isEmpty(obj)) return {};

  const { dt, weather, main: other } = obj;

  let { temp } = obj; // temp for current or hourly data
  if (typeof temp === 'object') temp = temp.day; // temp for daily data
  if (temp === undefined) temp = other.temp; // temp for every 3 hour data

  const date = formatDate(dt);
  const time = {
    main: formatTime(dt),
    hour: formatTime(dt, true),
  };
  const { weekday } = getDateTime(dt);
  const { main } = weather[0];
  const temperature = Math.round(temp);

  return { date, time, weekday, main, temp: temperature };
};

export default getData;
