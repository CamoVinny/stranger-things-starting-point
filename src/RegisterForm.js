import React, { useState} from 'react';
import { registerUser} from "./api";
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
            <form className='regForm' onSubmit={handleSubmit}>
                <input className='regin' placeholder = "New username" value = {userName} 
                type = 'text' onChange={updateUserName} />
                <input className='regin' placeholder = "New password" value = {password} 
                type = 'text' onChange={updatePassword}/>
                <input className='regin' placeholder = "confirm new password" value = {passwordComfirmation}
                type = 'text' onChange={updatePasswordComfirmation} />
                <button className='regsub'>Submit</button>               
            </form>
        </div>        
)}
export default RegisterForm;
