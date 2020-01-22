import React, { Component } from 'react';
import axios from 'axios';

import classes from './FullPost.module.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    componentDidMount() {
        console.log(this.props);
        this.loadData();
        // if (this.props.match.params.id) {
        //     if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
        //         axios.get('/posts/' + this.props.match.params.id)
        //         .then(Response => {
        //             //console.log(Response);
        //             this.setState({loadedPost: Response.data});
        //         });
        //     }
        // }
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData () {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== + this.props.match.params.id)) {
                axios.get('/posts/' + this.props.match.params.id)
                .then(Response => {
                    //console.log(Response);
                    this.setState({loadedPost: Response.data});
                });
            }
        }
    }

    deletePostHandler= () => {
        axios.delete('/posts/' + this.match.params.id)
        .then(response => {
            console.log(response);
        });
    }


    render() {
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
        if(this.props.match.params.id) {
            post = <p style={{ textAlign: "center" }}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={classes.Edit}>
                        <button className={classes.Delete} onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;