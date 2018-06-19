import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App.css';

import {getUser} from './../ducks/reducer'; 

class User extends Component {
    componentDidMount(){
        this.props.getUser();
    }

    render() {
        return (
            <div className='User'>
                <p>{this.props.user.user_name}'s User Information</p>
                <img alt ='' src={this.props.user.picture} height='100px'/>
            </div> 
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user,
    }
}

export default connect(mapStateToProps,{getUser})(User);