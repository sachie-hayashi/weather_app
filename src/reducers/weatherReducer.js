import { FETCH_ONECALL_SUCCESS, FETCH_3HOUR_SUCCESS } from '../actions';

const initialState = {
  city: {},
  current: {},
  hourly: [],
  every3hour: [],
  daily: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ONECALL_SUCCESS:
      const { current, hourly, daily } = action.payload;
      return {
        ...state,
        current,
        hourly,
        daily,
      };
    case FETCH_3HOUR_SUCCESS:
      const { list, city } = action.payload;
      return {
        ...state,
        every3hour: list,
        city,
      };
    default:
      return state;
  }
};

export default weatherReducer;
