import React, {useState, useEffect} from 'react';
import { seeMe } from './api';
import Edit from './Edit';
import Delete from './Delete';
import './Edit';
import './MessageViewer';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
const Profile =  () => {
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    
    const createUser = async () => {
        console.log(user)
        console.log(posts)
    }   
    useEffect(async () => {
        const userObject = await seeMe();
        setUser(userObject);
        setPosts(userObject.data.posts);        
    }, []);
    

    console.log(posts)
    
    return (
    <div>
      <button onClick={createUser}>test</button>
    
      {posts.map(post => 
      
                 <div key={post._id}>                         
                     <div>
                      <h2>Title: {post.title}</h2>
                      <Link to="/MessageViewer"><h3>Messages- {post.messages.content}</h3></Link>                     
                      <p>Description: {post.description}</p>
                      <p>Price: {post.price}</p>
                      <p>Location: {post.location}</p>                     
                      <Link to="/Edit"><button>Edit</button></Link>                     
                      <Delete id = {post._id} />
                    </div>                      
                 </div>                
         )} 
    </div>
    )
}
export default Profile;
