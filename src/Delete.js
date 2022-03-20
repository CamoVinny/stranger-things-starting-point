import React from 'react';
import { deletePost } from './api';


const Delete = (props) => {
    const {id} = props
    const handleDelete = () => {
        console.log("deleted")
        deletePost(id);
        
    }

    return(
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default Delete;