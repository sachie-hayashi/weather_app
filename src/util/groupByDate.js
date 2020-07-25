/**
 * Group an array of object by key(dt) and create a new object
 * @param {Array} arr Array of object
 * @return {Object}
 */

import formatDate from './formatDate';

const groupByDate = arr =>
  arr.reduce((acc, current) => {
    const date = formatDate(current.dt);
    return acc[date]
      ? { ...acc, [date]: [...acc[date], current] }
      : { ...acc, [date]: [current] };
  }, {});

export default groupByDate;
