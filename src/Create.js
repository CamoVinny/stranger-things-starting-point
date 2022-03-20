import React, { useState } from 'react';
import { addPost, makeHeaders } from './api';
const Create = () => {
    const [title, setTitle] = useState('');
    const [description , setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('')
    const [dilivery, setDilivery] = useState(false)
    const createPostObject = (title_, description_, price_, location_, dilivery_) => {
        return {
            title: title_,
            description: description_,
            price: price_,
            location: location_,
            willDeliver: dilivery_
        }
    }
    const updateTitle = (event) => {
        setTitle(event.target.value)
    }
    const updateDecription = (event) => {
        setDescription(event.target.value)
    }
    const updatePrice = (event) => {
        setPrice(event.target.value)
    }
    const updateLocation = (event) => {
        setLocation(event.target.value)
    }    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(makeHeaders())
        addPost(createPostObject(title, description, price, location, dilivery));
        setTitle('')
        setDescription('')
        setPrice('')
        setDilivery(false)
    }
    return(
        <div>
        <form className='createPost' onSubmit={handleSubmit}>
            <input className='createTitle' placeholder = "Title" value = {title} 
                type = 'text' onChange={updateTitle} />
            <input className='createDescription' placeholder='Description' value = {description}
                type = 'text' onChange={updateDecription}></input>
            <input className='createPrice' placeholder='Price' value={price}
                type = 'text' onChange={updatePrice}></input>
            <input className='createLocation' placeholder='Location' value={location}
                type = 'text' onChange={updateLocation}></input>            
            <button className='createButton'>POST IT!</button>        
        </form>        
        </div>
    )
};
export default Create;
