import React, { Component } from 'react';
import logo from '../styling/OslashLogo.svg';

export default class Auth extends Component {
    render() {
        return (
            <div>
                <a href={process.env.REACT_APP_LOGIN}>
                <img src={logo} className="App-logo" alt="logo"/>
                </a>  
            </div>
        )
    }
}
