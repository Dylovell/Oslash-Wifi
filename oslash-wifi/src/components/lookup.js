import React, { Component } from 'react';
import {connect} from 'react-redux';

import {channelQuery} from '../ducks/reducer'

class LookUp extends Component {
    constructor(){
        super()
        this.state={
            locationInput:'',
            ssidInput:''
        }
        this.submitButton = this.submitButton.bind(this)
    }

    submitButton() {
        this.state.locationInput === '' && this.state.ssidInput === ''
            ? alert('Please fill out inputs')
            :this.props.channelQuery(this.state.locationInput,this.state.ssidInput);
        this.setState({locationInput:'',ssidInput:''})
    }

    render() {
        return (
            <div className="Lookup">
                <p>LOOK UPP BOII</p>
                <div className='InputBox'>
                    Location
                    <input onChange={(e)=>this.setState({locationInput:e.target.value})}/>
                </div>
                <div className='InputBox'>
                    SSID
                    <input onChange={(e)=>this.setState({ssidInput:e.target.value})}/>
                </div>
                <div>
                    <button onClick={()=>this.submitButton()}>submit</button>
                </div>
            </div> 
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user,
    }
}

export default connect(mapStateToProps,{channelQuery})(LookUp);