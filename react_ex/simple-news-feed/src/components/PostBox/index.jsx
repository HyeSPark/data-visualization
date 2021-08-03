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
                <div className="post m-3">
                    <p className="text-secondary mt-1">#{index}</p>
                    <p>Username: <b>{username}</b></p>
                    <div className="post-area"><p>{post}</p></div>
                    <LikeButton />
                </div>
            </div>
        )
    }5
}

export default PostBox;