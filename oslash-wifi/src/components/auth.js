import React, { Component } from 'react';

export default class Auth extends Component {
    render() {
        return (
                <a className='NavName' href={process.env.REACT_APP_LOGIN}>
                User
                </a>  
        )
    }
}
