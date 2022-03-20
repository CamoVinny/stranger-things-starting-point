
import React, {useState, useEffect} from "react";
import { hot } from 'react-hot-loader/root';
import HandleLogout from "./HandleLogout";
import PageTabs from "./PageTabs"
import PostList from "./PostList";
import RegisterForm from "./RegisterForm";
import Login from "./login";
import Create from "./Create"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from "react-router-dom";
import './styles.css'
import Profile from './Profile'
import Edit from './Edit'
import MessageViewer from "./MessageViewer";



const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsing] = useState(localStorage.getItem("userUsing"))
  const [messageData, setMessageData] = useState([])
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"))
  }, []); 
  return (
    <div className="main">          
    <Router>
      <PageTabs isLoggedIn= {isLoggedIn} setIsLoggedIn= {setIsLoggedIn}/>
      <div className="welcomeAndLog">
        <h1 className="welcome">Welcome, {isLoggedIn ? userUsing : "please sign in."}</h1>
        <HandleLogout isLoggedIn= {isLoggedIn} setIsLoggedIn= {setIsLoggedIn}/>
      </div>  
      <Switch>
        <Route path= "/Profile">
          <Profile messageData= {messageData} setMessageData= {setMessageData}/>
        </Route>
        <Route path= "/login">
          <Login isLoggedIn= {isLoggedIn} setIsLoggedIn= {setIsLoggedIn}/>
        </Route>
        <Route exact path= "/">             
          <div>
            <PostList isLoggedIn= {isLoggedIn} setIsLoggedIn= {setIsLoggedIn}/>
          </div>
        </Route>
          <Route exact path= "/PostList">                           
        </Route>
        <Route exact path= "/RegisterForm">                     
          <RegisterForm/>
        </Route>
        <Route exact path= "/Create">        
          <Create/>         
        </Route>
        <Route exact path= "/Edit"><h1>Edit page</h1>
          <Edit/>
        </Route>
        <Route exact path= "/MessageViewer"><h1>Message page</h1>
          <MessageViewer messageData= {messageData}/>
        </Route>
      </Switch>
    </Router>    
</div>   
)
}
export default hot(App);
