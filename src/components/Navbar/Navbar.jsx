import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="head-container">
      <span className="logo">
        <img src="./src/assets/space.png" alt="Logo" />
        <h1 className="heading">Space-Travel</h1>
      </span>
      <ul className="list-container">
        <li>
        <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Rockets
          </NavLink>
        </li>
        <li>
         

          <NavLink
            to="/missions"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;