import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logos/Group 1329.png';
import users from '../../Images/logos/users-alt1.png';
import plus from '../../Images/logos/plus 1.png';
import './Admin.css';
import VList from '../VList/VList';


const Admin = () => {
    const[volunteerList, setVolunteerList] = useState([])
    console.log(volunteerList);
    useEffect(() => {
        fetch('https://secure-gorge-28498.herokuapp.com/individualsEventTaskk')
        .then(res => res.json())
        .then(data =>setVolunteerList(data));
        
    }, [])


    return (
        <div className="container-fluid row main-area">
            
            <div className ="col-3">
                <Link className="navbar-brand logo" to="/home"><img src={logo} alt=""/></Link>
                <div className = "volunteer-register">
                    <div><Link to="/admin"> <span> <img src={users} alt=""/> </span> Volunteer Register List</Link></div>
                    <div><Link to="/addevent"><span> <img src={plus} alt=""/> </span>Add Event</Link></div>
                </div>
            </div>

            <div className ="col-8">
                <h3>Volunteer Register List</h3>
                <table class="table table-striped">
                    <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Registation Date</th>
                    <th scope="col">Volunteer Register List</th>
                    <th scope="col">Action</th>
                    </tr>
                    </thead>

                    <tbody>
                        {
                        volunteerList.map(volunteer =><VList volunteer ={volunteer}></VList>)
                        }
                    </tbody>



                </table>
                
            </div>
        </div>
    );
};

export default Admin;