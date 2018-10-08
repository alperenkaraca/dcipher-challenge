// @flow
import {
  INCREMENT,
  DECREMENT
} from '../actions/counter'
import type _Action from '../types'

type CounterState = {
  current: number
}

const initial: CounterState = {
  current: 0,
}

export const counter = (state: CounterState = initial, action: _Action): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        current: state.current + 1
      }
    case DECREMENT: {
      return {
        ...state,
        current: state.current - 1
      }
    }
    default:
      return state
  }
}
