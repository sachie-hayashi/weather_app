import { combineReducers } from 'redux';
import viewportReducer from './viewportReducer';
import weatherReducer from './weatherReducer';
import loadingReducer from './loadingReducer';
import selectedDateReducer from './selectedDateReducer';

const rootReducer = combineReducers({
  isDesktop: viewportReducer,
  loadings: loadingReducer,
  selectedDate: selectedDateReducer,
  weather: weatherReducer,
});

export default rootReducer;
