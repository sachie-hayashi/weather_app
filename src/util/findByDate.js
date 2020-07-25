/**
 * Find an object by date in an array of objects
 * @param {Array} arr Array of objects
 * @param {string} date Search key(date) e.g. 'Jul 23', 'Aug 7', etc.
 * @return {Object}
 */

import formatDate from './formatDate';
import { Today } from '../actions';

const findByDate = (arr, date) =>
  arr.find(item => {
    const formattedDate = formatDate(item.dt);
    return formattedDate === date;
  });

export default findByDate;
