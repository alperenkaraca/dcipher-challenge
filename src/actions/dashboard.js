export const ADD_COUNTER = "ADDCOUNTER";
export const ADD_TODO_LIST = "ADDTODO";

export const addCounter = (idx) => (dispatch) => {
  dispatch({ type: ADD_COUNTER, idx });
}

export const addTodo = (idx) => (dispatch) => {
  dispatch({ type: ADD_TODO_LIST, idx });
}

