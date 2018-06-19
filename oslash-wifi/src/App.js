import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import router from './router'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {router}
      </div>
    );
  }
}