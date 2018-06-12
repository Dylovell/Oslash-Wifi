import React, { Component } from 'react';
import {connect} from 'react-redux';

class LookUp extends Component {
    render() {
        console.log(this.props.user)
        return (
            <div className="Lookup">
                <p>LOOK UPP BOII</p>
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