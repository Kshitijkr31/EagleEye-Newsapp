import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ onToggleMenu }) =>{
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const toggleMenu = () => {
    setShowMediaIcons(!showMediaIcons);
    onToggleMenu(!showMediaIcons);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/' style={{ fontSize: "xx-large" }}>
          EagleEye
        </Link>

        <div className='hamburger-menu'>
          <Link to='#' onClick={toggleMenu}>
            <GiHamburgerMenu style={{ fontSize: '2rem', color: 'white' }} />
          </Link>
        </div>

        <div className={`collapse navbar-collapse ${showMediaIcons ? "show" : ""}`} id='navbarNav'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/business' style={{ color: "white" }}>
                Business
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/entertainment' style={{ color: "white" }}>
                Entertainment
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/general' style={{ color: "white" }}>
                General
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/health' style={{ color: "white" }}>
                Health
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/science' style={{ color: "white" }}>
                Science
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/sports' style={{ color: "white" }}>
                Sports
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/technology' style={{ color: "white" }}>
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
