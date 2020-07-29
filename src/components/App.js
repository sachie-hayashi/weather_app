import React, { useEffect } from 'react';
import Main from './Main';
import DailyList from './DailyList';
import HourlyList from './HourlyList';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getViewport, fetchOnecall, fetch3hour } from '../actions';

const App = () => {
  const { isDesktop, loadings } = useSelector(state => state);
  const dispatch = useDispatch();

  const isLoading = Object.values(loadings).some(item => item);

  useEffect(() => {
    dispatch(getViewport()); // Execute on load
    window.addEventListener('resize', () => dispatch(getViewport())); // Bind event listener

    dispatch(fetchOnecall());
    dispatch(fetch3hour());
  }, [dispatch]);

  return (
    <div className="layout">
      <Main />
      {isDesktop && <HourlyList />}
      <DailyList />
      {isLoading && <Loader />}
    </div>
  );
};

export default App;
