import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='Footer'>
                    <Link to='/about'>about us</Link>
                </div>
            </footer>
        )
    }
}