import React, { Component } from 'react';
import '../App.css';
import Axios from 'axios';
import _ from 'lodash'

export default class Forum extends Component {
    constructor(){
        super()
        this.state={
            allComments:[],
            commentInput:''
        }
        this.deleteComment = this.deleteComment.bind(this)
    }

    componentDidMount(){
        this.getComments()
    }
    
    getComments(){
        Axios.get('/api/allcomments').then(comments=>this.setState({allComments:comments.data}))
    }
    commentMapper(){
        this.state.allComments.map((el,i)=>
            <div key={i} id='comment'>
                <p>{el.comm}</p>
            </div>
        )
    }
    submitComment(){
        Axios.post('/api/submitcomment', {comment:this.state.commentInput})
            .then(this.setState({commentInput:''}))
            .then(this.getComments())
    }

    editComment(id,comm){
        Axios.put(`/api/edit/${id}`, {comment:comm})
        .then(this.getComments())
    }

    deleteComment(id){
        Axios.delete(`/api/delete/${id}`, {id:id})
        .then(this.getComments())
    }

    handleEdit(e,i){
        let copy= _.cloneDeep(this.state.allComments);
        copy[i].comm = e.target.value;
        this.setState({allComments:copy})
        
    }

    render() {
        let comment = this.state.allComments.map((el,i)=>
                <div key={i} id='comment'>
                    <input value={this.state.allComments[i].comm} className='Inputbox' onChange={(e)=>this.handleEdit(e,i)}/>
                    <br/>
                    <button onClick={()=>this.editComment(el.id, el.comm)}>EDIT</button>
                    <button onClick={()=>this.deleteComment(el.id)} >DELETE</button>
                </div>
            )

        return (
            <div>
                <br/>
                <br/>
                <div>Your notes!</div>
                <hr/>
                {comment}
                <hr/>
                <div>Submit New Comment</div>
                <input value={this.state.commentInput} onChange={(e)=>this.setState({commentInput:e.target.value})}/>
                <button onClick={()=>this.submitComment()}>Submit</button>
            </div>
        )
    }
}