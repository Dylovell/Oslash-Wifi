import React, { Component } from 'react';
import {connect} from 'react-redux';


class ChannelChart extends Component {
    constructor(){
        super()
        this.ChannelMapper2GHz = this.ChannelMapper2GHz.bind(this);
        this.ChannelMapper5GHz = this.ChannelMapper5GHz.bind(this);
    }

    ChannelMapper2GHz(){
        let channelsArray = Object.entries(this.props.localChannelData.frequecy2GHz)
        return channelsArray.map((el,i)=>
            <div key={i}>Channel {el[0]} has {el[1]} users on it.</div>
            )
    }
    ChannelMapper5GHz(){
        let channelsArray = Object.entries(this.props.localChannelData.frequecy5GHzNonDFS)
        return channelsArray.map((el,i)=>
            <div key={i}>Channel {el[0]} has {el[1]} users on it.</div>
            )
    }

    render() {
        if(this.props.localChannelData.returned === false){
            return(
                <div><hr/>I've been lookin for my missin Chart</div> 
            )
        }else{
            return(
                <div>
                    <hr/>
                    My missin Chart, I found it!
                    <hr/>
                    2.4GHz Spectrum
                    <br/>
                    <this.ChannelMapper2GHz/>
                    <hr/>
                    5GHz NonDFS Spectrum
                    <br/>
                    <this.ChannelMapper5GHz/>
                </div>
            )
        }
    }
}

function mapStateToProps(state){
    return{
       localChannelData: state.localChannelData
    }
}

export default connect(mapStateToProps)(ChannelChart); 
