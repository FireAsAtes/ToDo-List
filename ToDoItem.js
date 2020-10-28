import React, { Component } from 'react'

export class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem() {
    this.props.deleteItem(this.props.item)
  }
  render() {
    return (
      <li className="list-group-item list-group-item-secondary">{this.props.item} <a href="#" onClick={this.deleteItem} className="delete-item float-right"><i className="fas fa-times"></i></a> </li>
    )
  }
}

export default ToDoItem
