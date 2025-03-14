import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"; // React icons for menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="head-container">
      <span className="logo">
        <img src="./src/assets/space.png" alt="Logo" />
        <h1 className="heading">Space-Travel</h1>
      </span>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <RxCross1 size={30} /> : <RxHamburgerMenu size={30} />}
      </div>

      {/* Navigation List */}
      <ul className={`list-container ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="/missions" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Profile
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
