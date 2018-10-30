import { ADD_COUNTER, ADD_TODO_LIST} from '../actions/dashboard'
const initial = {
  widgets: ['counter', 'todo']
}

export const dashboard = (state = initial, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      state.widgets.push("counter");
      return state;
    case ADD_TODO_LIST:
      state.widgets.push("todo");
      return state;
    default:
      return state;
  }
}
