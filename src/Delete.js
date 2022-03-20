import React from 'react';
import { deletePost } from './api';
const Delete = (props) => {
    const {id} = props
    const handleDelete = () => {        
        deletePost(id);        
    }
    return(
        <div className='deleter'>
            <button className='deleteButton' onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default Delete;