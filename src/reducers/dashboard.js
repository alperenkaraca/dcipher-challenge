import { ADD_COUNTER, ADD_TODO_LIST } from '../actions/dashboard'
const initial = {
  widgets: ['counter', 'todo']
}

export const dashboard = (state = initial, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        widget: state.widgets.push("counter")
      };
    case ADD_TODO_LIST:
      return {
        ...state,
        widget: state.widgets.push("todo")
      };
    default:
      return state;
  }
}
