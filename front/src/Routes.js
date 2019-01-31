import React from 'react'
import {Route,Switch} from 'react-router-dom'
import ListComments from './components/listComments';
import AddComments from './components/addComments';
//import Home from './components/home';


const Routes = ()=>(
  <Switch>
    <Route exact path="/" render={props =>
      <div>
        <AddComments/>
        <div className="center">
        <h1> Commments </h1>
        <ListComments/>
        </div>
      </div>
    } />
    {/* <Route path="/test" component = {Home} /> */}
  </Switch>
)
 
export default Routes