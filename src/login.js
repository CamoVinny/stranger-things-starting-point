import React, {useState} from "react";
import { loginUser } from "./api";

const Login = () => {
    
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const handleLogout = (event) => {
        event.preventDefault();
        console.log("logged out homie")
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
    }
    const updateUserName = (event) => {
        setUserName(event.target.value)
    }
    const updatePassword = (event) => {
        setPassword(event.target.value)
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input placeholder = "Login username" value = {userName} 
            type = 'text' onChange={updateUserName} />
            <input placeholder = "Login password" value = {password} 
            type = 'text' onChange={updatePassword}/>            
            <button>Login</button>                        
        </form>
        <form onSubmit={handleLogout}>
            <button>Log Out</button>
        </form>
    </div>        


    )
}


export default Login;