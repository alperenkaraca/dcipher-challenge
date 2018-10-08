import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  addCounter,
  addTodo
} from '../actions/dashboard'

import Counter from './counter/Counter'
import Todo from './todo/Todo'
import EmptySlot from './empty-slot/EmptySlot'

class Dashboard extends Component {

  handleAddCounter = (idx) => {
    this.props.addCounter(idx)
  }

  handleAddTodo = (idx) => {
    this.props.addTodo(idx)
  }

  render () {
    const widgets = this.props.widgets.map((widget, idx) => {
      switch (widget) {
        case 'counter': return <Counter key={idx} />
        case 'todo': return <Todo key={idx} />
        default: null
      }
    })
    return (
      <div id='dashboard'>
        {widgets}
        <EmptySlot
          addCounter={() => this.handleAddCounter(this.props.widgets.length)}
          addTodo={() => this.handleAddTodo(this.props.widgets.length)}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ dashboard }) => dashboard

const mapDispatchToProps = (dispatch) => {
  return {
    addCounter: (idx) => dispatch(addCounter(idx)),
    addTodo: (idx) => dispatch(addTodo(idx))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
