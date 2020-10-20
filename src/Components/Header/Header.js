import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logos/Group 1329.png';
import './Header.css';
import { userContext } from '../../App';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand logo" to="/home"><img src={logo} alt=""/></Link>
            

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <Link className="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/donation">Donation</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/events">Events</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </li>{
                    loggedInUser.email ?
                    <Link to="/admin"><button className="user-button">{loggedInUser.displayName}</button></Link>:
                    <>
                        <button className="register-button">Register</button>
                        <Link to="/admin"><button className="admin-button">Admin</button></Link>
                    </>
                    }
                    
                
                </ul>
                
            </div>
            </nav>
        </div>
    );
};

export default Header;