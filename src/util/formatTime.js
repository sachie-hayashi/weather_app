/**
 * Format time data from a unix timestamp
 * @param {number} unixTimestamp The number of seconds since midnight on January 1, 1970, UTC.
 * @param {boolean} hourOnly If only hour is needed no not. Default false.
 * @return {string}
 * @usage e.g.
 *  formatTime(1595372775); // -> 4:06pm
 *  formatTime(1595372775, true); // -> 4pm *
 */

import getDateTime from './getDateTime';

const formatTime = (unixTimestamp, hourOnly = false) => {
  const { hour, minute, dayPeriod } = getDateTime(unixTimestamp);
  const period = dayPeriod.toLowerCase();
  const time = `${hour}:${minute}${period}`;
  const timeHourOnly = `${hour}${period}`;
  return hourOnly ? timeHourOnly : time;
};

export default formatTime;
