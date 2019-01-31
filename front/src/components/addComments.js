import React,{Component} from 'react'
import {
  Form, Input, Button,
} from 'antd';

import {Mutation} from 'react-apollo'
import gql from "graphql-tag";



const addComment = gql`
  mutation($content: String!){
    createComment(content:$content)
    }
`



class addComments extends Component {
  state={
    content:""
  }

  handleChange = (e) =>{
    const content = e.target.value
    this.setState({content})  
    
  }
    
render() {

  return (
    <Mutation mutation={addComment}>
    {(createComment,{data})=>(
       <Form className="center" onSubmit = { e =>{
         
         createComment({variables:{content:this.state.content}})
         
        }
       } >
          <Form.Item
            placeholder="Note"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
              >
            {(
             <Input.TextArea rows={10} cols={80} onChange = { this.handleChange } placeholder="Write a Comment" />
            )}


          </Form.Item>
         

          <Button className="submit" type="primary" htmlType="submit">
            Submit
          </Button>

         </Form> 
     
  )}
  </Mutation>
  )
}

}

 export default addComments