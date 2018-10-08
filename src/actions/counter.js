export const INCREMENT = 'COUNTER/INCREMENT'
export const DECREMENT = 'COUNTER/DECREMENT'

export const increment = () => (dispatch) => {
  dispatch({type: INCREMENT})
}

export const decrement = () => (dispatch) => {
  dispatch({type: DECREMENT})
}
