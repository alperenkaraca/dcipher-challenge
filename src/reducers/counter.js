// @flow
import {
  INCREMENT,
  DECREMENT
} from '../actions/counter'


export const counter = (state= {}, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        [action.id]: (state[action.id] || 0) + 1,
      };
    case DECREMENT:
      return {
        ...state,
        [action.id]: (state[action.id] || 0) -1,
      };
    default:
      return state;
  }
}
