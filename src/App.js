import React, { Component } from 'react';
import './App.css';
import ItemList from './components/ItemList'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Welcome to 2do App</h1>
        <ItemList/>
      </div>
    );
  }
}
