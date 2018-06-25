import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import crowd from '../styling/Crowd-rob-curran.jpg'

export default class Main extends Component {
    render() {
        return (
            <div className="Main">
                <img alt='Main' src={crowd} width='100%'/>
                <div className='Content'>
                    <p>Want faster WIFI?</p>
                    <hr/>
                    <p>Make your WIFI faster with this one trick!</p>
                    <hr/>
                    <p>IPSs hate him!</p>
                </div>
                <img alt='Main' src={crowd} width='100%'/>
                <div className='Content'>
                    <Link to='/lookup'>FIND THE BEST CHANNEL</Link>
                    <hr/>
                    <div className='MainText'>There are a TON of people using WiFi. If everyone is using the same Wifi channel, it can really slow things down for everyone.</div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div> 
        )
    }
}