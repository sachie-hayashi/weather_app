import onecallData from '../testData/onecall';
import every3hourData from '../testData/every3hour';

/* --------------- Action types --------------- */

export const FETCH_ONECALL_REQUEST = 'FETCH_ONECALL_REQUEST';
export const FETCH_ONECALL_SUCCESS = 'FETCH_ONECALL_SUCCESS';
export const FETCH_ONECALL_FAILURE = 'FETCH_ONECALL_FAILURE';
export const FETCH_3HOUR_REQUEST = 'FETCH_3HOUR_REQUEST';
export const FETCH_3HOUR_SUCCESS = 'FETCH_3HOUR_SUCCESS';
export const FETCH_3HOUR_FAILURE = 'FETCH_3HOUR_FAILURE';

/* --------------- Action creators --------------- */

const fetchOnecallRequest = () => ({
  type: FETCH_ONECALL_REQUEST,
});

const fetchOnecallSuccess = payload => ({
  type: FETCH_ONECALL_SUCCESS,
  payload,
});

const fetchOnecallFailure = error => ({
  type: FETCH_ONECALL_FAILURE,
  error,
});

export const fetchOnecall = () => dispatch => {
  dispatch(fetchOnecallRequest());
  fetch(
    'https://api.openweathermap.org/data/2.5/onecall?lat=49.2497&lon=-123.1193&units=metric&appid=1da740daf0be5c49111d044e808821c3'
  )
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(data => dispatch(fetchOnecallSuccess(data)))
    .catch(error => dispatch(fetchOnecallFailure(error.message)));

  // For dummy API call and data
  // setTimeout(() => {
  //   dispatch(fetchOnecallSuccess(onecallData));
  // }, 4000);
};

const fetch3hourRequest = () => ({
  type: FETCH_3HOUR_REQUEST,
});

const fetch3hourSuccess = payload => ({
  type: FETCH_3HOUR_SUCCESS,
  payload,
});

const fetch3hourFailure = error => ({
  type: FETCH_3HOUR_FAILURE,
  error,
});

export const fetch3hour = () => dispatch => {
  dispatch(fetch3hourRequest());
  fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q=Vancouver,ca&units=metric&appid=1da740daf0be5c49111d044e808821c3'
  )
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(data => dispatch(fetch3hourSuccess(data)))
    .catch(error => dispatch(fetch3hourFailure(error.message)));

  // For dummy API call and data
  // setTimeout(() => {
  //   dispatch(fetch3hourSuccess(every3hourData));
  // }, 2000);
};
