import React, { Component } from 'react'
import './style.scss'
import { connect } from 'react-redux'
import {
  increment,
  decrement
} from '../../actions/counter'

class Counter extends Component {

  handleIncrement = (key) => {
    this.props.increment(key)
  }

  handleDecrement = (key) => {
    this.props.decrement(key)
  }

  render () {
    const {id} = this.props
    return (
      <div className='widget counter'>
       <div className='current'>{this.props[id]|| 0}</div>
        <button onClick={()=>this.handleIncrement(id)}>Increment</button>
        <button onClick={()=>this.handleDecrement(id)}>Decrement</button>
      </div>
    )
  }
}
const mapStateToProps = ({ counter }) => counter

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (id) => dispatch(increment(id)),
    decrement: (id) => dispatch(decrement(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
