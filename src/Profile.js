import React, {useState, useEffect} from 'react';
import { seeMe } from './api';
import Delete from './Delete';
import './Edit';
import './MessageViewer';

const Profile =  () => {
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])    
    useEffect(async () => {
        const userObject = await seeMe();
        setUser(userObject);
        setPosts(userObject.data.posts);        
    }, []);   
    return (
    <div>     
          {posts.map((post) =>
                
                 <div  key={post._id}>                         
                     <div className='userPosts'>
                      <h2 className='ptitle'>{post.active ? ` ${post.title}` : "Deleted Post"}</h2>              
                      <p className='pdescription'>Description: {post.description}</p>
                      <p className='pprice'>Price: {post.price}</p>
                      <p className='plocation'>Location: {post.location}</p>
                      <h3 className='pmessages'>Messages - {post.messages.length}</h3>
                      {post.messages.map(message => <div className='pallmessages' key = {message._id}>{`From ${message.fromUser.username}-- ${message.content} `} </div>)}                    
                      <Delete id = {post._id} />
                    </div>                      
                 </div>                
          )} 
    </div>
    )
}
export default Profile;
