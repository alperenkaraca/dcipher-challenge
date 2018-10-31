import {
  ADD_ITEM
} from '../actions/todo'
import {
  INCREMENT,
  DECREMENT
} from '../actions/counter'
import type { _Action, _Item } from '../types'

type TodoState = {
  items: Array<_Item>
}

const initial: TodoState = {
  1: {
    items: [
    ]
  }
}

export const todo = (state: TodoState = initial, action: _Action): TodoState => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        [action.id]: { items: [...state[action.id].items, action.item] }
      }
    case INCREMENT:
      return {
        ...state,
      }
    case DECREMENT:
      return {
        ...state,
      }
    default:
      return {
        ...state,
        [action.idx || 1]: { items: [] },
      }
  }
}
