import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import router from './router'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header className="App"/>
        <body className="App">
        {router}
        </body>
        <Footer className="App"/>
      </div>
    );
  }
}