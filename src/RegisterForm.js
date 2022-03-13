import React, { useState, useEffect } from 'react';
import { registerUser, testAuthentication} from "./api";
const RegisterForm = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordComfirmation, setPasswordComfirmation] = useState('')    
    const token = localStorage.getItem("token")
    const handleSubmit = async (event) => {
        event.preventDefault();
        const dummyCreds = {
            user: {
              username: userName,
              password: password
            }
          }
        //console.log(userName, password);        
        await registerUser(dummyCreds); 
       // console.log(testAuthentication(dummyCreds))      
        //testAuthentication(dummyCreds);        
        setUserName('');
        setPassword('');
        setPasswordComfirmation('');
        //console.log(logIn)
        console.log(token)
        
    }
    const updateUserName = (event) => {
        setUserName(event.target.value)
    }
    const updatePassword = (event) => {
        setPassword(event.target.value)
    }
    const updatePasswordComfirmation = (event) => {
        setPasswordComfirmation(event.target.value)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder = "username" value = {userName} 
                type = 'text' onChange={updateUserName} />
                <input placeholder = "password" value = {password} 
                type = 'text' onChange={updatePassword}/>
                <input placeholder = "confirm password" value = {passwordComfirmation}
                type = 'text' onChange={updatePasswordComfirmation} />
                <button>Submit</button>                
            </form>
        </div>        
)}

export default RegisterForm;
