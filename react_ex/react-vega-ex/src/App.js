import React from 'react';
import './App.css';
import BarChart from './components/BarChart';

import LineChart from './components/LineChart';
// // import PostBox from './components/PostBox';
// import NewsFeed from './components/NewsFeed';
// import Button from 'react-bootstrap/Button';


class App extends React.Component{
  constructor(props){
    super(props);
    // this.onPostSubmit = this.onPostSubmit.bind(this);
  }

  // onPostSubmit(username, post) {
  //   if (username !== "" && post !== ""){
  //     console.log(username, post);
  //     this.setState(prevState => ({
  //       usernames: [...prevState.usernames, username],
  //       posts: [...prevState.posts, post],
  //     }))
  //   }
  // }

  render(){
    return (
      <div className="App">
        {/* Hello, world! */}
        {/* <InputBox onPostSubmit={this.onPostSubmit}/>
        <NewsFeed usernames={usernames} posts={posts}/> */}
        <BarChart />
        {/* <PostBox username={username} post={post}/> */}
      </div>
    );
  }
  
}

export default App;
