import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import logo from '../../Images/logos/Group 1329.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';



firebase.initializeApp(firebaseConfig);

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            setLoggedInUser(user);
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
          });
    }
    return (
        <div className="container">
            <div className="center">
                <img src={logo} alt=""/>
                    <div className = "registration-form">
                        <h3 className="p-3">Login with</h3>
                        <button onClick ={handleSignIn} className="icon"><FontAwesomeIcon icon={faGoogle}/> <p>Continue with Google</p></button>   
                    </div>
            </div>
        </div>
    );
};

export default Login;