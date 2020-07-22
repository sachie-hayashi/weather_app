import {
  FETCH_ONECALL_SUCCESS,
  FETCH_ONECALL_REQUEST,
  FETCH_3HOUR_SUCCESS,
} from '../actions';

const initialState = {
  // isLoading: false,
  data: {
    current: {},
    hourly: [],
    every3hour: [],
    daily: [],
  },
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_ONECALL_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    case FETCH_ONECALL_SUCCESS:
      const { current, hourly, daily } = action.payload;
      return {
        ...state,
        // isLoading: false,
        data: {
          ...state.data,
          current,
          hourly,
          daily,
        },
      };
    case FETCH_3HOUR_SUCCESS:
      const { list, city } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          every3hour: list,
          city,
        },
      };
    default:
      return state;
  }
};

export default weatherReducer;
