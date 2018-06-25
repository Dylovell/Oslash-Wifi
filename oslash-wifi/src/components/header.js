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
            {/* <svg 
              alt='Menu' 
              onClick={this.openMenu} 
              className="MenuIcon" 
              viewBox="0 0 100 100">
              <path d="M 100,0 L 100,100,0,100,0,0 Z" 
              fill="none" className="MenuIconLines"></path>
            </svg> */}
            <div id='sideNav' className='NavMenu' style={{width:this.state.width}}>
                
                <Auth onClick={()=>this.closeMenu()}/>
                <hr/>
                <a><Link to='/lookup' onClick={()=>this.closeMenu()}>Find</Link></a>
                <hr/>
                <a><Link to='/moreinfo' onClick={()=>this.closeMenu()}>Additional Information</Link></a>
                <hr/>                
                <a><Link to='/about' onClick={()=>this.closeMenu()}>About</Link></a>
                <br/>
                <button onClick={()=>this.closeMenu()}>Close</button>
            </div> 
        </header>
      // </div>
    );
  }
}

export default Header;
