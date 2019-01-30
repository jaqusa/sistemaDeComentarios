import React from 'react'
import {Query} from 'react-apollo'
import gql from "graphql-tag";


const All = () =>(
  <Query
    query={gql`
      {
        allComments{
          content
        }
      }
    `}
  >
  {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :${error.message}(</p>;

      return data.allComments.map(({content}) => (
        <div key={content}>
          <p>{content}</p>
        </div>
      ));
  }}


  </Query>
) 


export default All