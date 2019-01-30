import React, { Component } from 'react';
import {
  Comment, Form, Button, List, Input,
} from 'antd';
import moment from 'moment';

const TextArea = Input.TextArea;

const CommentList = ({ comments, deleteComment }) => (

  
  <List
    dataSource={comments}
    itemLayout="horizontal"
    renderItem={props => (
    <p>
    <Comment {...props} />
    <Button  onClick={deleteComment} 
      > 
      Delete
      </Button>
    </p>
    )}
  />

);

const Editor = ({
  onChange, onSubmit, submitting, value,
}) => (
  <div>
    <Form.Item>
      <TextArea rows={10} cols={100} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);


class Home extends Component {


  state = {
    comments: [],
    submitting: false,
    value: '',
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            content: <p>{this.state.value}</p>,
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }


  render(){
    const { comments, submitting, value } = this.state;

    return (
      <div style={{ textAlign:'center'}} >
      
      <Comment
        content={(
          <Editor
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            submitting={submitting}
            value={value}
          />
        )}
      />
      <h2>Comments</h2>
      {comments.length > 0 && <CommentList  comments={comments} />}

       
    </div>
    
    );
  }

}

 
export default Home;
