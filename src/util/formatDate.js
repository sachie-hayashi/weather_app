import getDateTime from './getDateTime';

const formatDate = unixTimestamp => {
  const { month, day } = getDateTime(unixTimestamp);
  const date = `${month} ${day}`;
  return date;
};

export default formatDate;
