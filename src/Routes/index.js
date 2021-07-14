import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Login from '../pages/login/Login'
const Toolbar=()=>[
    <Link to="/">home</Link>,   
    <Link to="/register">Register</Link>

]
const Home = ()=> [<Toolbar/>,<h1>home</h1>]
const Register =()=>[<Toolbar/>, <Login/>]
export default ()=> ( 
    //add the url of login/register, feed, product, profile,etc
    <Router>
        <Switch>
        <Route path ="/" exact component={Home} />
        <Route path ="/register" exact component={Register}/> 
        </Switch>
    </Router>
)