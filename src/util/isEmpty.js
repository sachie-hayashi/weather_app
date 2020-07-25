/**
 * Check if an object or array is empty
 * @param {Object|Array} obj
 * @return {boolean}
 */

const isEmpty = obj => {
  if (obj === undefined || obj === null || typeof obj !== 'object') return true;
  if (Object.keys(obj).length === 0) return true;
  return false;
};

export default isEmpty;
