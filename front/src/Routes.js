import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './components/home'
import Db from './components/db'
 
const Routes = ()=>(
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/db" component={Db}/>
  </Switch>
)
 
export default Routes