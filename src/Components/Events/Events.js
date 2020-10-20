import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Event from './Event/Event';
import './Events.css';

const Events = () => {
    
    const [event, setEvent] = useState([]);
    const handleAddEvent = (event) =>{
        
    }

    useEffect(() =>{
        fetch('https://secure-gorge-28498.herokuapp.com/eventlists')
        .then(response => response.json())
        .then(data =>setEvent(data))
        
    },[])





    return (
        <div className="container-fluid">
            
            <div>
                <Header></Header>
                <h1 className ="text-center">I GROW BY HELPING PEOPLE IN NEED </h1>
                
                <form className="example text-center">
                <input type="text" placeholder="Search"/>
                <button type="button" class="btn btn-success">Search</button>
                </form>
            </div>
        
            <div className ="row  ">
                {
                event.map(event => <Event event ={event} handleAddEvent = {handleAddEvent}></Event>)
                }
            </div>
        </div>
    );
};

export default Events;