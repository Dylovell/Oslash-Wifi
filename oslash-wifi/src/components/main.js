import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import crowd from '../styling/Crowd-rob-curran.jpg'
import dune from '../styling/dune-jeremy-cai.jpg'
import marble from '../styling/marble.jpg'

export default class Main extends Component {
    render() {
        return (
            <div className="Main">
                <br/>
                <br/>
                
                <img className='MainPhoto' alt='Main' src={marble} width='100%'/>
                <div className='Content'>
                    <Link to='/lookup'>Want Faster WiFi</Link>
                    <hr/>
                    <Link to='/moreinfo'>What are WiFi Channels</Link>
                    <hr/>
                    <Link to='/moreinfo'>Change a WiFi Channel</Link>
                </div>
                <img alt='Main' src={dune} width='100%'/>
                <div className='Content'>
                    <Link to='/lookup'>FIND THE BEST CHANNEL</Link>
                    <hr/>
                    <div className='MainText'>There are a TON of people using WiFi. If everyone is using the same Wifi channel, it can really slow things down for everyone.</div>
                </div>
                <br/>
                <img alt='Main' src={crowd} width='100%'/>
                <br/>
                <br/>
            </div> 
        )
    }
}