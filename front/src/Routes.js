import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './components/home';


 
const Routes = ()=>(
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
)
 
export default Routes