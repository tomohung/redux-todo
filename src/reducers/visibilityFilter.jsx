import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes';

export const visibilityFilter = (
  state = 'all',
  action
) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
