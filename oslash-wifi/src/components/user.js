import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App.css';

import {getUser} from './../ducks/reducer'; 

class User extends Component {
    componentDidMount(){
        this.props.getUser();
    }

    render() {
        console.log(this.props)
        return (
            <div className='User'>
                <p>USER THAT IS SINGED IN ={this.props.user.user_name}</p>
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