import React, { Component } from 'react';
import {connect} from 'react-redux';

class LookUp extends Component {
    constructor(){
        super()
        this.state={
            locationInput:'',
            ssidInput:''
        }
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
            </div> 
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user,
    }
}

export default connect(mapStateToProps,{})(LookUp);