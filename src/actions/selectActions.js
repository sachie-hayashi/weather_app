/* --------------- Action types --------------- */

export const SELECT_DATE = 'SELECT_DATE';

/* --------------- Other constants --------------- */

export const Today = 'Today';

/* --------------- Action creators --------------- */

export const selectDate = date => ({
  type: SELECT_DATE,
  date,
});
