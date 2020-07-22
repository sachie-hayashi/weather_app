import { combineReducers } from 'redux';
import viewportReducer from './viewportReducer';
import weatherReducer from './weatherReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  isDesktop: viewportReducer,
  loadings: loadingReducer,
  weather: weatherReducer,
});

export default rootReducer;
