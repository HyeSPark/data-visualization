import React from 'react';
import './App.css';

import InputBox from './components/InputBox';
// import PostBox from './components/PostBox';
import NewsFeed from './components/NewsFeed';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      usernames: [],
      posts: [],
    }
    this.onPostSubmit = this.onPostSubmit.bind(this);
  }

  onPostSubmit(username, post) {
    if (username !== "" && post !== ""){
      console.log(username, post);
      this.setState(prevState => ({
        usernames: [...prevState.usernames, username],
        posts: [...prevState.posts, post],
      }))
    }
  }

  render(){
    const { usernames, posts } = this.state;
    return (
      <div className="App">
        {/* Hello, world! */}
        <InputBox onPostSubmit={this.onPostSubmit}/>
        <NewsFeed usernames={usernames} posts={posts}/>
        {/* <PostBox username={username} post={post}/> */}
      </div>
    );
  }
  
}

export default App;
