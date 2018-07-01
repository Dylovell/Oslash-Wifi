import React, { Component } from 'react';
import logo from '../styling/OslashLogo.svg';
import menu from '../styling/menu.svg';
import '../App.css';
import {Link} from 'react-router-dom'
import Auth from './auth';

class Header extends Component {
  constructor(){
    super()
    this.state={
      width:'0px'
    }
    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  openMenu(){
    this.setState({width:'250px'})
  }
  closeMenu(){
    this.setState({width:'0px'})
  }

  render() {
    return (
      // <div className="Header">
        <header className="Header">
            <Link to='/'><img src={logo} className="Logo" alt="logo" onClick={()=>this.closeMenu()}/></Link>
            <div className='Nav-center'/>
            <img src={menu} alt='Menu' onClick={this.openMenu} className="MenuIcon"/>
            <div id='sideNav' className='NavMenu' style={{width:this.state.width}}>
                <p>oSlash WiFi</p>
                <Link className='NavName' to='/lookup' onClick={()=>this.closeMenu()}>Find</Link>
                <hr/>
                <Link className='NavName' to='/moreinfo' onClick={()=>this.closeMenu()}>Additional Info</Link>
                <hr/>                
                <Auth className='NavName' text-align='right' onClick={()=>this.closeMenu()}/>
                <hr/>
                <Link className='NavName' to='/about' onClick={()=>this.closeMenu()}>About</Link>
                {/* <br/> */}
                {/* <button onClick={()=>this.closeMenu()}>Close</button> */}
            </div> 
        </header>
      // </div>
    );
  }
}

export default Header;
