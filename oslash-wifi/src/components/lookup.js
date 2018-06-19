import React, { Component } from 'react';
import {connect} from 'react-redux';

import MapComponent from './map'
import {channelQuery, mapSelect, showMapState} from '../ducks/reducer'

class LookUp extends Component {
    constructor(){
        super()
        this.state={
            locationInput:'',
            ssidInput:'',
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
                console.log(this.props.mapData);
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
                    <p>LOOK UPP </p>
                        Location
                        <input className='InputBox' value={this.state.locationInput} onChange={(e)=>this.setState({locationInput:e.target.value})}/>
                        SSID
                        <input className='InputBox' value={this.state.ssidInput} onChange={(e)=>this.setState({ssidInput:e.target.value})}/>
                        <button onClick={()=>{this.submitButton();}}>submit</button>
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
        showMap: state.showMap
    }
}

export default connect(mapStateToProps,{channelQuery, showMapState, mapSelect})(LookUp);