import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
//import Axios from 'axios';
// import Axios from '../../axios'

//import Post from '../../components/Post/Post';
//import FullPost from './FullPost/FullPost';
//import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }

    // state = {
    //     posts: [],
    //     selectedPostId: null,
    //     error: false
    // }

    // postSelectHandler = (id) => {
    //     this.setState({selectedPostId: id});
    // }

    // componentDidMount () {
    //     Axios.get('/posts ')
    //        .then(Response => {
    //            const posts = Response.data.slice(0,4);
    //            const updatedPosts = posts.map(post => {
    //                return {
    //                    ...post,
    //                    author: 'Shuvendu'
    //                }
    //            });
    //            this.setState({posts: updatedPosts});
    //         //    console.log(Response);
    //        })
    //        .catch(error => {
    //            //console.log(error);
    //            this.setState({error: true});
    //        });
    // }
    render () {
        
        // let posts = <p style={{textAlign: "center"}}>Something went wrong..</p>;
        // if(!this.state.error) {
        //     posts = this.state.posts.map(post => {
        //         return <Post 
        //            key={post.id}
        //            title={post.title} 
        //            author={post.author} 
        //            clicked={() => this.postSelectHandler(post.id)} />;
        //     });
        // }
         
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/posts/" 
                            exact
                            activeClassName="my-active"
                            activeStyle={{
                                color: 'coral',
                                textDecoration: 'underline'
                            }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <section className={classes.Posts}>
                    {posts}
                </section> */}
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
                {/* <Posts /> */}
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home2</h1>} /> */}
                <Switch>
                  {/* {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null} */}
                  {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                  <Route path="/posts" component={Posts} />
                  {/* <Route path="/" component={Posts} /> */}
                  {/* <Redirect from="/" to="/posts" /> */}
                  <Route render={() => <h1>Not Found</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;