import React, { Component } from 'react';
import axios from '../../../axios';
import { Route, Link } from 'react-router-dom';
import './Posts.css';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: []
    }

    postSelectHandler = (id) => {
        //this.setState({selectedPostId: id});
        this.props.history.push( '/posts' + id);
    }

    componentDidMount () {
        console.log(this.props);
        axios.get('/posts ')
           .then(Response => {
               const posts = Response.data.slice(0,4);
               const updatedPosts = posts.map(post => {
                   return {
                       ...post,
                       author: 'Shuvendu'
                   }
               });
               this.setState({posts: updatedPosts});
            //    console.log(Response);
           })
           .catch(error => {
               console.log(error);
               //this.setState({error: true});
           });
    }

    render() {
        let posts = <p style={{ textAlign: "center" }}>Something went wrong..</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (<Link to={'/posts/' + post.id} key={post.id} >
                    <Post
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectHandler(post.id)} />
                </Link>);
            });
        }
        return (
            <div>
              <section className='Posts'>
                {posts}
              </section>
              {/* <Route path="/posts/:id" exact component={FullPost} /> */}
              <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;