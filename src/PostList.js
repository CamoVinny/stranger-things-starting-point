import React, { useState, useEffect } from 'react';
import { getPosts } from './api';
import Edit from "./Edit";
import Delete from './Delete';
import Message from './Message';
const PostList = (props) => {
    const {isLoggedIn, setIsLoggedIn} = props;
    const [posts, setPosts] = useState([]);
    const [postId,setPostId] = useState(null);
    useEffect(async () => {
        const posts = await getPosts();
        setPosts(posts.data.posts);
    }, []);
    return (
        <div>
            {posts.map(post =>
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    {post.isAuthor && <Edit/>}
                    {post.isAuthor && <Delete/>}
                    {!post.isAuthor&& isLoggedIn &&<Message id = {post._id}/>}
                </div>
            )}
        </div>
    );
};
export default PostList;