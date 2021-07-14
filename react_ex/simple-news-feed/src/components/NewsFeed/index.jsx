import React from 'react';
import PostBox from '../PostBox';
import Container from 'react-bootstrap/Container';

class NewsFeed extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const { usernames, posts } = this.props;
        return (
            usernames.map((val, i) => {
                let idx = usernames.length - i - 1
                return <Container className="mt-1" key={idx}><PostBox username={usernames[idx]} post={posts[idx]} index={idx+1}/></Container>
            })
        )
    }

}

export default NewsFeed;