import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    let itemClass = this.props.item.isDone ? 'done' : '';
    return (
      <div className="item">
          <div className={"item-desc " +  itemClass }>{ this.props.item.name }</div> 
          <div className="btn-wrapper">
            <button className="btn-blue" onClick= { () => this.props.handleMarkDone(this.props.item) }>
              { this.props.item.isDone ? 'Undo mark' : 'Mark done' }
            </button>
          </div>
      </div>
    );
  }
}
