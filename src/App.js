import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Events from './Components/Events/Events';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Donation from './Components/Donation/Donation';
import Blog from './Components/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Admin from './Components/Admin/Admin';
import AddEvent from './Components/Admin/AddEvent/AddEvent';
import EventTasks from './Components/EventTasks/EventTasks';



export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({

  });
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      
        <Switch>
          <Route path = "/donation">
            <Donation></Donation>
          </Route>
          <Route path = "/admin">
            <Admin></Admin>
          </Route>
          <Route path = "/addevent">
            <AddEvent></AddEvent>
          </Route>

          <Route path = "/eventTasks">
            <EventTasks></EventTasks>
          </Route>
          
          <Route path = "/events">
            <Events></Events>
          </Route>
          <Route path = "/home">
            <Events></Events>
          </Route>
          <Route path = "/blog">
            <Blog></Blog>
          </Route>
          <Route path = "/login">
            <Login></Login>
          </Route>
          <Route exact path ="/">
            <Events></Events>
          </Route>
          <PrivateRoute path = "/eventlist/:key">
            <Register></Register>
          </PrivateRoute>
          <Route path ="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     
    </userContext.Provider>
  );
}

export default App;
