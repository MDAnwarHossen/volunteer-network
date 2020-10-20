import React from 'react';
import { useHistory } from 'react-router-dom';
import trash from '../../Images/logos/trash-2 9.png';
import './VList.css';

const VList = (props) => {
    const history = useHistory();
    const deleteEvent =(id) => {
        fetch('https://secure-gorge-28498.herokuapp.com/individualsEventTaskk/' + id, {
        method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                //window.location.reload('/home');
                window.location ="/home";
            }
        })
        }
    return (
        
            
                <tr>
                <th scope="row">{props.volunteer.name}</th>
                <td>{props.volunteer.email}</td>
                <td>{props.volunteer.date}</td>
                <td>{props.volunteer.eventName}</td>
                <td><img className="trash-image" onClick={() =>deleteEvent(props.volunteer._id)} src={trash} alt=""/></td>
                </tr>
               
                
            
            
    );
};

export default VList;