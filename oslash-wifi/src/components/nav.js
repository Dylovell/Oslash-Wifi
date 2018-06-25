import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Auth from './auth';

export default class Nav extends Component {
    render() {
        return (
            <div id='sideNav' className='NavMenu'>
                <Auth/>
                <div><Link to='/lookup'>Look Up</Link></div>
                <div><Link to='/about'>About</Link></div>
            </div> 
        )
    }
}