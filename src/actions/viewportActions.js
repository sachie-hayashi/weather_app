/* --------------- Action types --------------- */

export const GET_VIEWPORT = 'GET_VIEWPORT';

/* --------------- Other constants --------------- */

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

/* --------------- Action creators --------------- */

export const getViewport = () => ({
  type: GET_VIEWPORT,
  isDesktop: window.innerWidth >= breakpoints.lg,
});
