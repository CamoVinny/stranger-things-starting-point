import React from 'react';
import './Profile'
import './login'
import './RegisterForm'
import './Create'
import '/'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
const PageTabs = () => {
    
return (
    <div>  
        <div>
            <Link to='/'>Home</Link>
        </div>
        <div>
            <Link to='/login'>login here</Link>
        </div>        
        <div>
            <Link to='/RegisterForm'>Register here</Link>
        </div>
        <div>
            <Link to='/Create'>Create Post</Link>
        </div>
        <div>
            <Link to='/Profile'>Profile Page</Link>
        </div>               
    </div>   
)
}
export default PageTabs;