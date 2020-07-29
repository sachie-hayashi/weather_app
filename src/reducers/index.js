import { combineReducers } from 'redux';
import viewportReducer from './viewportReducer';
import weatherReducer from './weatherReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import selectedDateReducer from './selectedDateReducer';

const rootReducer = combineReducers({
  isDesktop: viewportReducer,
  loadings: loadingReducer,
  errors: errorReducer,
  selectedDate: selectedDateReducer,
  weather: weatherReducer,
});

export default rootReducer;
