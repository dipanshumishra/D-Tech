import React from 'react';
import logo from "./Images/logo.png";
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './navbar.css';

const Navbar = ()=>{
   
	return(
           <>
                  <div className="container nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
  <div className="container">
    <NavLink className="navbar-brand" to="/Home">D-Techno</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
       
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link active" aria-current="page" to="/Home">Home</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link active" aria-current="page" to="/About">About</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link active" aria-current="page" to="/Service">Service's</NavLink>
        </li>
      
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link active" aria-current="page" to="/Contact">Contact+</NavLink>
        </li>


      </ul>
     
    </div>
  </div>
</nav>
</div>
            </div>
        </div>
           </>
	);
};

export default Navbar;