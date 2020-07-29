import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchOnecall, fetch3hour } from '../actions';

const ErrContent = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchOnecall());
    dispatch(fetch3hour());
  };

  return (
    <div className="err-content">
      <h1 className="err-title">Something Went Wrong...</h1>
      <p className="help-text">Try Again</p>
      <button
        type="button"
        onClick={handleClick}
        className="btn-retry btn btn-white rounded-pill"
      >
        Retry
      </button>
    </div>
  );
};

export default ErrContent;
