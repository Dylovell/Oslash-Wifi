import React, { Component } from 'react';

export default class Auth extends Component {
    render() {
        return (
            <div>
                <a href={process.env.REACT_APP_LOGIN}>
                    <button>USER ICON HERE </button>
                </a>  
            </div>
        )
    }
}
