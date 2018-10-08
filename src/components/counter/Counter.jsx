import React, { Component } from 'react'
import './style.scss'
import { connect } from 'react-redux'
import {
  increment,
  decrement
} from '../../actions/counter'

class Counter extends Component {

  handleIncrement = () => {
    this.props.increment()
  }

  handleDecrement = () => {
    this.props.decrement()
  }

  render () {
    return (
      <div className='widget counter'>
        <div className='current'>{this.props.current}</div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    )
  }
}
const mapStateToProps = ({ counter }) => counter

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
