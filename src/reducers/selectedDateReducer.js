import { SELECT_DATE, Today } from '../actions';

const selectedDateReducer = (state = '', action) => {
  switch (action.type) {
    case SELECT_DATE:
      return action.date;
    default:
      return state;
  }
};

export default selectedDateReducer;
