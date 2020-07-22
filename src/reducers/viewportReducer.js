import { GET_VIEWPORT } from '../actions';

const viewportReducer = (state = false, action) => {
  switch (action.type) {
    case GET_VIEWPORT:
      return action.isDesktop;
    default:
      return state;
  }
};

export default viewportReducer;
