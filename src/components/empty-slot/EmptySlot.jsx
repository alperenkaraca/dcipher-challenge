import React, { Component } from 'react'
import './style.scss'

class EmptySlot extends Component {
  render () {
    return (
      <div className='widget emptyslot'>
        <button onClick={this.props.addCounter}>Add Counter</button>
        <button onClick={this.props.addTodo}>Add Todo</button>
      </div>
    )
  }
}

export default EmptySlot
