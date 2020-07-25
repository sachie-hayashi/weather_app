import formatDate from './formatDate';
import formatTime from './formatTime';
import getDateTime from './getDateTime';

const getData = obj => {
  let { dt, temp, weather } = obj;
  if (typeof temp === 'object') temp = temp.day;
  // const { main } = weather ? weather[0] : [];
  const { main } = weather[0];

  // const date = dt && formatDate(dt);
  // const time = dt && formatTime(dt);
  // const { weekday } = dt ? getDateTime(dt) : {};
  const date = formatDate(dt);
  const time = formatTime(dt);
  const { weekday } = getDateTime(dt);
  return { date, time, weekday, temp, main };
};

export default getData;
