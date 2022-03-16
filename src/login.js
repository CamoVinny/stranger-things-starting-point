import React, {useState} from "react";
import { loginUser } from "./api";
import RegisterForm from "./RegisterForm";

const Login = () => {    
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") ? true : false)

    
    
    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem("token")
        setIsLoggedIn(false)
        
        console.log("logged out homie")
       console.log(localStorage.getItem("token"))
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            user: {
              username: userName,
              password: password
            }
          }                
        await loginUser(user); 
        console.log(loginUser(user))
        setIsLoggedIn(localStorage.getItem("token") ? true : false)

    }
    const updateUserName = (event) => {
        setUserName(event.target.value)
    }
    const updatePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleRegister = () => {
        RegisterForm();
    }
    return (
       
        <div> 
        <form onSubmit={handleSubmit}>
            <input style={isLoggedIn ? {display: "none"} : {display: "inline"}} placeholder = "Login username" value = {userName} 
            type = 'text' onChange={updateUserName} />
            <input style={isLoggedIn ? {display: "none"} : {display: "inline"}} placeholder = "Login password" value = {password} 
            type = 'text' onChange={updatePassword}/>            
            <button style={isLoggedIn ? {display: "none"} : {display: "inline"}}>Login</button>                                    
        </form>
        <span>
            <button onSubmit={handleRegister}>New user? Register HERE!</button>
        </span>
        <form onSubmit={handleLogout}>
            <button style={!isLoggedIn ? {display: "none"} : {display: "inline"}}>Log Out</button>
        </form>
        <h3>Your <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in. </h3>
    </div>
    )
}
export default Login;