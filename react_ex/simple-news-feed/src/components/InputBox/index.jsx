import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React from 'react';
import './index.css'

class InputBox extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit() {
        const { onPostSubmit } = this.props;
        const username = document.getElementById('username').value;
        const post = document.getElementById('post').value;
        onPostSubmit(username, post);
        document.getElementById('username').value = "";
        document.getElementById('post').value = "";
        
    }

    render() {
        return (
            <div id="input-box-container">
                <div id="input-box">
                    <Form>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="name" />
                        </Form.Group>
                        <Form.Group controlId="post">
                            <Form.Label>Post</Form.Label>
                            <Form.Control as="textarea" placeholder="What are you thinking about?" rows={3} />
                        </Form.Group>
                        <Button variant ="secondary" onClick={this.onSubmit}>Submit</Button>
                    </Form>
                </div>
            </div>
            
        )
    }
}

export default InputBox;