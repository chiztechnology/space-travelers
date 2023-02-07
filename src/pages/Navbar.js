import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('rockets');
  return (
    <div className="navbar-container">
      <div className="navbar-left-align">
        <h1 className="logo"><Link className="navbar-logo-link" to="/">Space Travelers hub</Link></h1>
        <ul className="navbar-ul">
          <li className="navbar-ul-li"><Link className={`navbar-li-item ${activeMenu === 'rockets' ? 'active' : ''}`} to="/rockets" onClick={() => setActiveMenu('rockets')}>Rockets</Link></li>
          <li className="navbar-ul-li"><Link className={`navbar-li-item ${activeMenu === 'missions' ? 'active' : ''}`} to="/missions" onClick={() => setActiveMenu('missions')}>Mission</Link></li>
          <li className="navbar-ul-li"><Link className={`navbar-li-item ${activeMenu === 'profile' ? 'active' : ''}`} to="/profile" onClick={() => setActiveMenu('profile')}>Profile</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
