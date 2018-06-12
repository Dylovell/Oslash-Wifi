import React, { Component } from 'react';
import logo from '../styling/OslashLogo.svg';
import '../App.css';
import {Link} from 'react-router-dom'
import Nav from './nav'


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
            <Link to='/'><img src={logo} className="App-logo" alt="logo"/></Link>
            <Nav/>
            <h1 className="App-title">oSlash WIFI  HEADER</h1>
        </header>
      </div>
    );
  }
}

export default Header;
