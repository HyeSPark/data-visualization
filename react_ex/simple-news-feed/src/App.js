import React from 'react';
import './App.css';

import InputBox from './components/InputBox';
// import PostBox from './components/PostBox';
import NewsFeed from './components/NewsFeed';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
        <Container className="gs-4 mt-4">
          <Row>
            <Col>
              <InputBox onPostSubmit={this.onPostSubmit}/>
            </Col>
            <Col>
              <NewsFeed usernames={usernames} posts={posts}/>
            </Col>
          </Row>
        </Container>
        {/* <PostBox username={username} post={post}/> */}
      </div>
    );
  }
  
}

export default App;
