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
    const updateDilivery = () => {
        setDilivery("willing to deliver")
        console.log(dilivery)
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
        <form onSubmit={handleSubmit}>
            <input placeholder = "Title" value = {title} 
                type = 'text' onChange={updateTitle} />
            <input placeholder='Description' value = {description}
                type = 'text' onChange={updateDecription}></input>
            <input placeholder='Price' value={price}
                type = 'text' onChange={updatePrice}></input>
            <input placeholder='Location' value={location}
                type = 'text' onChange={updateLocation}></input>
            <input type="checkbox" id="diliver" value={dilivery}
                onChange={updateDilivery}></input>
            <label htmlFor="diliver">Delivery?</label>
            <button >POST IT!</button>        
        </form>        
        </div>
    )
};
export default Create;
