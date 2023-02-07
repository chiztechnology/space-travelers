import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar-container">
    <div className="navbar-left-align">
      <h1 className="logo"><NavLink className="navbar-logo-link" to="/">Space Travelers hub</NavLink></h1>
      <ul className="navbar-ul">
        <li className="navbar-ul-li">
          <NavLink to="/rockets">
            {({ isActive }) => (
              <span
                className={isActive ? 'navbar-li-item active' : 'navbar-li-item'}
              >
                Rockets
              </span>
            )}
          </NavLink>
        </li>
        <li className="navbar-ul-li">
          <NavLink to="/missions">
            {({ isActive }) => (
              <span
                className={isActive ? 'navbar-li-item active' : 'navbar-li-item'}
              >
                Mission
              </span>
            )}
          </NavLink>
        </li>
        <li className="navbar-ul-li">
          <NavLink to="/profile">
            {({ isActive }) => (
              <span
                className={isActive ? 'navbar-li-item active' : 'navbar-li-item'}
              >
                Profile
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
