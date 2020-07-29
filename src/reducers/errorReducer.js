import {} from 'module';

const errorReducer = (state = {}, action) => {
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(action.type);

  // Ignore actions other than *_REQUEST / *_FAILURE
  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    // Store error messages
    [requestName]: requestState === 'FAILURE' ? action.error : '',
  };
};

export default errorReducer;
