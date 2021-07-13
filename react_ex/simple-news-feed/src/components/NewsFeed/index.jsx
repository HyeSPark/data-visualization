import React from 'react';
import PostBox from '../PostBox';

class NewsFeed extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const { usernames, posts } = this.props;
        return (
            usernames.map((val, i) => {
                let idx = usernames.length - i - 1
                return <PostBox username={usernames[idx]} post={posts[idx]} index={idx+1} key={idx}/>
            })
        )
    }

}

export default NewsFeed;