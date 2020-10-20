import React from 'react';
import { Link } from 'react-router-dom';
import users from '../../../Images/logos/users-alt1.png';
import logo from '../../../Images/logos/Group 1329.png';
import plus from '../../../Images/logos/plus 1.png';
import './AddEvent.css';
import { useForm } from 'react-hook-form';


const AddEvent = () => {

    const { register, handleSubmit, errors } = useForm();


        const onSubmit = (onSubmit) => {
            fetch('https://secure-gorge-28498.herokuapp.com/addEvents', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(onSubmit)
                
            })
        }

    return (
        <div className="container-fluid row main-area">
            <div className ="col-3">
                <Link className="navbar-brand logo" to="/home"><img src={logo} alt=""/></Link>
                <div className = "volunteer-register">
                    <div><Link to="/admin"> <span> <img src={users} alt=""/> </span> Volunteer Register List</Link></div>
                    <div><Link to="/addevent"><span> <img src={plus} alt=""/> </span>Add Event</Link></div>
                </div>
            </div>

            <div className ="col-9">
                <h3>Add Event</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <input name="title" ref={register({ required: true })} placeholder="Event Title" />
                        {errors.title && <span className="error">Event Title is required</span>}
                        <input  type="date" name="date" ref={register({ required: true })} placeholder="Date"/>
                        {errors.date && <span className="error">Date is required</span>}
                        <input name="description" ref={register({ required: true })} placeholder="Description" />
                        {errors.description && <span className="error">Description is required</span>}
                        <input name="image" ref={register({ required: true })} placeholder="Image URL"/>
                        {errors.image && <span className="error">Image URL is required</span>}
                        
                        
                        
                        
                        <input className=" button btn btn-primary" type="submit" value="Submit" />
                 </form>
            </div>
        </div>
    );
};

export default AddEvent;