import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './MyTask.css';

const MyTask = (props) => {

    const history = useHistory();
    const deleteEvent =(id) => {
        fetch('https://secure-gorge-28498.herokuapp.com/individualsEventTask/' + id, {
        method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                history.push('/home');
                
            }
        })
        }


    return (
        <div className="col-md-6">
            <div className="d-flex p-1">
                <div className="event-image">
                    <img src={props.events.imgURL} alt=""/>
                </div>
                <div className="p-3">
                    <h3>{props.events.eventName}</h3>
                    <h4>{props.events.date}</h4>
                    <button onClick={() =>deleteEvent(props.events._id)} type="button" class="btn btn-secondary float-right">Cancle</button>
                </div>
            </div>
        </div>
        
    );
};

export default MyTask;