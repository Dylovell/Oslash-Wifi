import React, { Component } from 'react';
import {connect} from 'react-redux';
import MapComponent from './map'

import {channelQuery} from '../ducks/reducer'

class LookUp extends Component {
    constructor(){
        super()
        this.state={
            locationInput:'provo',
            ssidInput:'devmountain-internal',
            mapData:{},
            showMap:false
        }
        this.submitButton = this.submitButton.bind(this)
    }

    submitButton() {
        if(this.state.locationInput === '' && this.state.ssidInput === ''){
            alert('Please fill out inputs')}
        else{
            this.props.channelQuery(this.state.locationInput,this.state.ssidInput);
        this.setState({locationInput:'',ssidInput:'',showMap:true})}
    }

    takeMeBack(){
        this.setState({showMap:false})
    }
    

    render() {
        // console.log(this.props)
        if(this.state.showMap===false){
        return (
            <div className="Lookup">
                <p>LOOK UPP </p>
                <div className='InputBox'>
                    Location
                    <input value={this.state.locationInput} onChange={(e)=>this.setState({locationInput:e.target.value})}/>
                </div>
                <div className='InputBox'>
                    SSID
                    <input value={this.state.ssidInput} onChange={(e)=>this.setState({ssidInput:e.target.value})}/>
                </div>
                <div>
                    <button onClick={()=>{this.submitButton();}}>submit</button>
                </div>
            </div> 
        )}else{
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
    }
}

export default connect(mapStateToProps,{channelQuery})(LookUp);