import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { userContext } from '../../App';
import Header from '../Header/Header';
import MyTask from '../MyTask/MyTask';
import './EventTasks.css';


const EventTasks = () => {
    const [myEvent, setMyEvent] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    
    useEffect(() =>{
        fetch('https://secure-gorge-28498.herokuapp.com/individualsEventTask?email='+loggedInUser.email)
        .then(result => result.json())
        .then(data => setMyEvent(data));
    },[])


   

    return (
        <div className ="container-fluid">
            <Header></Header>
            <div className ="events row">
                {
                    myEvent.map(events =><MyTask events={events}></MyTask>)
                }
            </div>
            
        </div>
        
    );
};

export default EventTasks;