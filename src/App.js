
import React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterForm from "./RegisterForm";
import Login from "./login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Switch } from "react-router-dom";


const App = (props) => {
  const { name } = props;
  //const [loggedIn, isLoggedIn] = useState(localStorage.getItem('token'));

  //const isLoggedIn = localStorage.getItem("token")
  return (
    <div>
    
    <h1>Welcome, {name}</h1>

    <Router>
      <Switch>
        <Route path= "/login">
          <Login />
        </Route>
        <Route exact path= "/"><h1>Home</h1>
          <Link to='/login'>login here</Link>
        </Route>

      </Switch>
    </Router>
    
        
       
      
             
     
     
</div>

     
      
      
     

      
    
    
 
)
}
export default hot(App);
