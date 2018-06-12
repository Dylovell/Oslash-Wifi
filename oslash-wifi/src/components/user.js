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
                <p>USER</p>
                <br/>
                <img alt ='' src={this.props.user.picture} height='100px'/>
                <p>USER THAT IS SINGED IN = {this.props.user.user_name}</p>
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