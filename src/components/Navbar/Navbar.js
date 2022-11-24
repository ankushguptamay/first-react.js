import React from 'react'
import './navbar.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Navbar(props){
    return(
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link mx-2 active" to="/" id="notes">{props.notes}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-2 active" to="/mynotes" id="info">{props.myNotes}</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <NavLink className="btn btn-outline-light mx-2" to="/login">LogIn</NavLink>
              <NavLink className="btn btn-outline-light mx-2" to="/signup">SignUp</NavLink>
            </form>
        </div>
      </nav>
    );
}

Navbar.propTypes = {
    notes: PropTypes.string,
    myNotes: PropTypes.string
}

Navbar.defaultProps = {
    notes: "Notes",
    myNotes: "MyNotes"
}