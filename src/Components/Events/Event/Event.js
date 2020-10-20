import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Event.css';

const Event = (props) => {
    
    return (
        <div className = "col-md-3 col-sm-6 ">
            <div onClick={()=>props.handleAddEvent(props.event)} className = "event">
                
                <Link to={"/eventlist/"+props.event.key}><img src= {props.event.image} alt=""/></Link>

                <h4> <Link to={"/eventlist/"+props.event.key}>{props.event.title}</Link> </h4>
            </div>
            
        </div>
    );
};

export default Event;