// @flow
import React, { Component } from 'react'
import './style.scss'
import { connect } from 'react-redux'
import {
  addItem
} from '../../actions/todo'
import type _Item from '../../types'

type ItemProps = {
  text: string
}
class Item extends Component<ItemProps, {}> {
  render() {
    return (
      <div className='item'>
        {this.props.text}
      </div>
    )
  }
}

type TodoProps = {
  addItem: _Item => any,
  items: Array<_Item>
}

type TodoState = {
  inputText: string
}

class Todo extends Component<TodoProps, TodoState> {
  constructor(props) {
    super(props);
    this.state = { inputText: '' }
  }

  handleInputChange = (e) => {
    this.setState({ inputText: e.target.value })
  }

  handleSubmitItem = (e) => {
    e.preventDefault()
    this.props.addItem({ text: this.state.inputText }, this.props.id)
    this.setState({ inputText: '' })
  }

  render() {
    const { id } = this.props
    const items = this.props[id].items.map((item, idx) => <Item key={idx} {...item} />)
    return (
      <div className='widget counter'>
        <div className='items'>{items}</div>
        <form onSubmit={this.handleSubmitItem}>
          <input type='text'
            placeholder='new item...'
            value={this.state.inputText}
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ todo }) => todo

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item, id) => dispatch(addItem(item, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
