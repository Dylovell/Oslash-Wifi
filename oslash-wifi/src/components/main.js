import React, { Component } from 'react';

import crowd from '../styling/Crowd-rob-curran.jpg'

export default class Main extends Component {
    render() {
        return (
            <div className="Main">
                <img alt='Image' src={crowd} width='100%'/>
                <br/>
                <p>Want faster WIFI?</p>
                <p>Make your WIFI faster with this one trick!</p>
                <p>IPSs hate him!</p>
            </div> 
        )
    }
}