import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Auth from './auth';

export default class Nav extends Component {
    render() {
        return (
            <div className='Nav'>
                <Auth/>
                <br/>
                <Link to='/lookup'>Look Up</Link>
                <br/>
                <Link to='/about'>About</Link>
            </div> 
        )
    }
}