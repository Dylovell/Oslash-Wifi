import React, { Component } from 'react';

export default class MoreInfo extends Component {
    render() {
        return (
            <div className='Info'>
                <br/>
                <br/>
                <br/>
                <div className='Title'>Useful Resources</div>
                <br/>
                <br/>
                <div className='Title'>What is Going on?</div>
                <hr/>
                <p>If you have no idea what any of this is about, This could be a useful resource</p>
                <a href='https://blog.aerohive.com/getting-familiar-with-wi-fi-channels-wlan-back-to-basics/'>What are Wifi channels</a>
                <br/>
                <div className='Title'>How Do I change My WiFi Channel</div>
                <hr/>
                <p>Okay, I have the information for channel traffic in my area, what do I do with it.</p>
                <a href='http://lmgtfy.com/?q=change+the+channel+on+my+router'>Change The Channel on My Router</a>
                <br/>
                <br/>
                <div className='Title'>HOW DO YOU KNOW MY WIFI!?</div>
                <hr/>
                <a href='https://wigle.net/'>Wigle.net</a>
                <div className='Smallspace'/>
            </div> 
        )
    }
}