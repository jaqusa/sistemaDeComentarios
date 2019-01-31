import React ,{Component} from 'react'
import {Query,Mutation} from 'react-apollo'
import gql from "graphql-tag";


const eraseComment = gql`
  mutation($id:ID!){
    deleteComment(id:$id)
  }
`


class CommentList extends Component {

render(){

  return (
  <Query
  query={gql`
    {
      allComments{
        id
        content
      }
    }
  `}

  >
{({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :${error.message}(</p>;
     

      
    return data.allComments.map( (comment) => (
      //console.log(comment)
      <Mutation mutation={eraseComment}>
       { (deleteComment,{data}) => (
        <ul>
          <li>
          {comment.content}
          <button  class="delete" onClick={ e => { 
             
              deleteComment({variables:{id:comment.id}})
              
          }}> 
              Delete
          </button>
          </li>
        </ul>
       )} 
      </Mutation>
    ));
}}





</Query>
  

  )

}
}


 export default CommentList