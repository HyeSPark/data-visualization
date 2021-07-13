import React from 'react';
import './index.css'
import LikeButton from '../LikeButton'

class PostBox extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { username, post, index } = this.props;
        return (
            <div className="post-container">
                <div className="post">
                    <p>#{index}</p>
                    <p>Username: {username}</p>
                    <div className="post-area"><p>{post}</p></div>
                    <LikeButton />
                </div>
            </div>
        )
    }
}

export default PostBox;