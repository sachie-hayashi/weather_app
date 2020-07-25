/**
 * Get date & time data from a unix timestamp
 * @param {number} unixTimestamp a unix timestamp
 * @return {object}
 * @usage e.g.
 * getDateTime(1595372775);
 * -> { year: "2020", month: "Jul", day: "21", hour: "4", minute: "06", dayPeriod: "PM", weekday: "Tuesday" }
 */

const getDateTime = unixTimestamp => {
  const datetime = new Date(unixTimestamp * 1000);

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'long',
    hours12: true,
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  const formatParts = formatter.formatToParts(datetime);

  const dateTimeData = formatParts.reduce((acc, current) => {
    const { type, value } = current;
    if (type === 'literal') return acc;
    return { ...acc, [type]: value };
  }, {});

  return dateTimeData;
};

export default getDateTime;
