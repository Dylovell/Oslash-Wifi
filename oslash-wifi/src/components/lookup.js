import React, { Component } from 'react';
import {connect} from 'react-redux';

import MapComponent from './map'
import ChannelChart from './channelChart'
import {channelQuery, mapSelect, showMapState} from '../ducks/reducer'

class LookUp extends Component {
    constructor(){
        super()
        this.state={
            locationInput:'',
            ssidInput:'',
            locationInputPlaceholder:'Your General Location',
            ssidInputPlaceholder:'Your WiFi Name',
            mapData:{},
            loadingTimer:false
        }
        this.submitButton = this.submitButton.bind(this)
        this.takeMeBack = this.takeMeBack.bind(this)
    }

    componentDidMount(){
        this.props.showMapState(false)
    }

    async submitButton() {
        if(this.state.locationInput === '' && this.state.ssidInput === ''){
            alert('Please fill out inputs')}
        else{
            await this.props.channelQuery(this.state.locationInput,this.state.ssidInput)
                this.setState({locationInputPlaceholder:this.state.locationInput,ssidInputPlaceholder:this.state.ssidInput});
                this.setState({locationInput:'',ssidInput:''});
                this.props.mapData.length === 1 ?this.props.mapSelect(this.props.mapData[0]) :this.props.showMapState(true);
        }
    }

    // loadingTimerSwitch(){

    // }

    takeMeBack(){
        this.props.showMapState(false)
    }

    render() {
        // console.log(this.props)
        if(this.props.showMap===false){
            return (
                <div className="Lookup">
                    <p>LOOK UP</p>
                        <input className='Inputbox' 
                            placeholder={this.state.locationInputPlaceholder} 
                            value={this.state.locationInput} 
                            onChange={(e)=>this.setState({locationInput:e.target.value})}
                        />
                        <br/>
                        <br/>
                        <input className='Inputbox' 
                            placeholder={this.state.ssidInputPlaceholder} 
                            value={this.state.ssidInput} 
                            onChange={(e)=>this.setState({ssidInput:e.target.value})}
                        />
                        <br/>
                        <br/>
                        <button className='Button' onClick={()=>{this.submitButton();}}>Find</button>
                        <br/>
                        <ChannelChart/>
                </div> 
            )
        }else if(this.state.loadingTimer){
            return (
                <div>
                   <p>This is a loading animation</p>
                </div> 
            )
        }else{
            return (
                <div>
                    <MapComponent/>
                    <button onClick={()=>{this.takeMeBack();}}>back</button>
                </div> 
            )
        }
    }
}


function mapStateToProps(state){
    return{
        user: state.user,
        mapData: state.mapData,
        showMap: state.showMap,
        localChannelData: state.localChannelData
    }
}

export default connect(mapStateToProps,{channelQuery, showMapState, mapSelect})(LookUp);