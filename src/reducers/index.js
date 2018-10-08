import { combineReducers } from 'redux'
import { counter } from './counter'
import { todo } from './todo'
import { dashboard } from './dashboard'

export default combineReducers({
  counter,
  todo,
  dashboard
})
