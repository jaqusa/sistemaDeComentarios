import React, { Component } from 'react';
import Routes from './Routes';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

class App extends Component {

  render() {


    return (
      
      <div>
        <ApolloProvider client={client}>
        <Routes/>
        </ApolloProvider>
    </div>
    
    );
  }
}

export default App;
