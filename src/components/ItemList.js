import React, { Component } from 'react';
import Item from './Item';

export default class ItemList extends Component {

  state = {
    curItem: "",
    todoItems: [
      { id: 1, name: "item 1", isDone: false },
      { id: 2, name: "item 2", isDone: false },
      { id: 3, name: "item 3", isDone: false }
    ]
  }

  handleClick = (e) => {
    e.preventDefault();
    let length = this.state.todoItems.length;

    if (this.state.curItem.trim() === "") {
      return;
    }

    const newItem = { 
      id: length === 0 ? 0 : this.state.todoItems[length - 1].id + 1, 
      name: this.state.curItem,
      isDone: false
    }

    this.setState({
      todoItems: [...this.state.todoItems, newItem],
      curItem: "",

    });
    console.log(this.state.todoItems);
  }

  handleChange = (e) => {
    this.setState({
      curItem: e.target.value
    });
    console.log(this.state.curItem);
    
  }

  handleMarkDone = (item) => {
    this.setState({
      todoItems: this.state.todoItems.map((el) => { 
        if (item.id === el.id) {
          el.isDone = !el.isDone;
        } 
        return el;
      })
    });
    console.log(this.state.todoItems);
  }

  handleClear = () => {
      this.setState({
        todoItems: this.state.todoItems.filter((el) => !el.isDone)
      });
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" value={ this.state.curItem } onChange={ (e) => this.handleChange(e) }/>
          <br/>
          <button className="btn-green" type="submit" onClick={ (e) => this.handleClick(e) }>Add Item</button>
          <button className="btn-red" onClick={ this.handleClear }>Clear Done</button>
          <h5>Currently you have { this.state.todoItems.length } things to do</h5>
          { this.state.todoItems.map((item) => (
            <Item item={ item } handleMarkDone={ this.handleMarkDone.bind(this) } />
          )) }
        </form>
      </div>
    );
  }
}
