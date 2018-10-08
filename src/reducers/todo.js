import {
  ADD_ITEM
} from '../actions/todo'
import type {_Action, _Item} from '../types'

type TodoState = {
  items: Array<_Item>
}

const initial: TodoState = {
  items: [
    {text: 'item 1'},
    {text: 'item 2'}
  ]
}

export const todo = (state: TodoState = initial, action: _Action): TodoState => {
  switch (action.type) {
    case ADD_ITEM:
      return {
          ...state,
          items: [...state.items, action.item]
      }
    default:
      return state
  }
}
