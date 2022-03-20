import React, { useState, useEffect } from 'react';
import { getPosts } from './api';
import Edit from "./Edit";
import Delete from './Delete';
import Message from './Message';
const PostList = (props) => {
    const {isLoggedIn, setIsLoggedIn} = props;
    const [posts, setPosts] = useState([]);    
    const [searchPhrase, setSearchPhrase] = useState('');    
    const [postsToDisplay, setPostsToDisplay] = useState(posts) 
    
        // {searchPhrase.length ? filteredPosts : posts}
    useEffect(async () => {
        const posts = await getPosts();
        setPosts(posts.data.posts);
        setPostsToDisplay(posts.data.posts)
    }, []);

    const postMatches = (phrase,text) => {
      if  (phrase.toLowerCase().includes(text.toLowerCase())) {
          return true
      }       
        else {
            return false
        }
    };
    
    const submitSearch = (event) => {
        event.preventDefault();
        const filteredPosts = posts.filter(post=>postMatches(post.title,searchPhrase));    
        setPostsToDisplay((searchPhrase.length ? filteredPosts : posts))
               
        
    }
   const setSearch = (event) => {       
       setSearchPhrase(event.target.value)
        const filteredPosts = posts.filter(post=>postMatches(post.title,searchPhrase));
        setPostsToDisplay((searchPhrase.length) ? filteredPosts : posts)
   }
    
    
    return (
        <div>
            <form className='searchBar' onSubmit={submitSearch}>
            <input className='searchBarBar' type = "text" onChange = {setSearch} placeholder = "Search for posts here..."  value={searchPhrase}></input>
            <button className='searchBarButton'>Search</button>
            </form>
            {postsToDisplay.map(post =>
                <div className='posts' key={post._id}>
                    <h2 className='postTitle'>{post.title}</h2>
                    <p className='postPeice'>{post.description}</p>
                    <p className='postPeice'>Amount: {post.price}</p>
                    <p className='postPeice'>Location: {post.location}</p>
                    {post.isAuthor && <Edit/>}
                    {post.isAuthor && <Delete/>}
                    {!post.isAuthor&& isLoggedIn &&<Message id = {post._id}/>}
                </div>
            )}
        </div>
    );
};
export default PostList;