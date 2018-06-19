import React, { Component } from 'react';
import logo from '../styling/OslashLogo.svg';
import '../App.css';
import {Link} from 'react-router-dom'
import Nav from './nav'


class Header extends Component {
  render() {
    return (
      // <div className="Header">
        <header className="Header">
            <Link to='/'><img src={logo} className="App-logo" alt="logo"/></Link>
            <div className='Nav-center'/>
            <Nav/>
        </header>
      // </div>
    );
  }
}

export default Header;
