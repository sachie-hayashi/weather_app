const loadingReducer = (state = {}, action) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(action.type);
  // console.log(matches);

  // Ignore actions other than *_REQUEST / *_SUCCESS /  *_FAILURE
  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    // Store whether a request is happening at the moment or not
    [requestName]: requestState === 'REQUEST',
  };
};

export default loadingReducer;
