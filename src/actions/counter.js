export const INCREMENT = 'COUNTER/INCREMENT'
export const DECREMENT = 'COUNTER/DECREMENT'

export const increment = (id) => (dispatch) => {
  dispatch({ type: INCREMENT, id })
}

export const decrement = (id) => (dispatch) => {
  dispatch({ type: DECREMENT, id })
}
