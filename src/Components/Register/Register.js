import React, { Component, useContext, useEffect } from 'react';
import { Link, useHistory, useLocation, useParams, withRouter } from 'react-router-dom';
import './Register.css';
import logo from '../../Images/logos/Group 1329.png';
import { Controller, useForm } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import { userContext } from '../../App';
import { useState } from 'react';
import EventTasks from '../EventTasks/EventTasks';

const Register = () => {
    const{key} = useParams();
    const [eventKey, setEventKey] = useState({});


    useEffect(() => {
        fetch('https://secure-gorge-28498.herokuapp.com/eventlist/'+ key)
        .then(res => res.json())
        .then(data =>setEventKey(data));
        
    }, [key])

    const [loggedInUser, setLoggedInUser] = useContext(userContext);


        const { register, handleSubmit, errors } = useForm();
        const history = useHistory();
        

        
        const onSubmit = (data) => {
            
            fetch('https://secure-gorge-28498.herokuapp.com/eventTasks', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data) 
        
            })
            
            .then(res => res.json())
            .then(outPut =>{
                if(outPut){
                    history.push('/eventTasks');
                    
                }
            })

        }
      
    return (
        <div className="container">
            <div className="center">
                <img src={logo} alt=""/>
                    <div className = "registration-form">
                        <h1>Register as a Volunteer</h1>


                        <form  onSubmit={  handleSubmit(onSubmit)}>
                        
                        <input name="name" ref={register({ required: true })} defaultValue={loggedInUser.displayName} />
                        {errors.name && <span className="error">Name is required</span>}
                        <input name="email" ref={register({ required: true })} defaultValue={loggedInUser.email} />
                        {errors.email && <span className="error">User Name or Email is required</span>}
                        <input  type="date" name="date" ref={register({ required: true })} placeholder="Date"/>
                        {errors.date && <span className="error">Date is required</span>}
                        <input name="description" ref={register({ required: true })} placeholder="Description" />
                        {errors.description && <span className="error">Description is required</span>}
                        <input name="eventName" ref={register({ required: true })} defaultValue={eventKey.title}  />
                        {errors.eventName && <span className="error">Event Name is required</span>}

                        <input name="imgURL" type="hidden" ref={register({ required: true })}   defaultValue={eventKey.image}></input>
                        
                        <input className=" button btn btn-primary" type="submit" value="Registration" />
                        </form>
                        
                    </div>
            </div>
        </div>
    );
};

export default Register;