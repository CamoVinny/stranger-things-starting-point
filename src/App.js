
import React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterForm from "./RegisterForm";
import Login from "./login";
const App = (props) => {
  const { name } = props;
  
  return (
    <>
      <Login />
      <h1>Welcome, {name}</h1>
      <RegisterForm />


      <button onClick={() => {            
        
      }}>Register Here!</button>
      
      <button onClick={() => {            
           
      }}>Login</button>

      <button onClick={() => {            
            
      }}>Logout</button>

      <PostList />
    </>
  );
}

export default hot(App);
