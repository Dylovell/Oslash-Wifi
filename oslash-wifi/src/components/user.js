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
                <br/>
                <br/>
                <br/>
                <p>Hello {this.props.user.user_name}</p>
                <img className='Userpic' src={this.props.user.picture}/>
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