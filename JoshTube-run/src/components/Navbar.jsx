import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-section nav-left">
        <button className="nav-button menu-button">
          <i className="uil uil-bars"></i>
        </button>
        <a href="#" className="nav-logo">
          <img src="images/logo.png" alt="Logo" className="logo-image" />
          <h2 className="logo-text">CnTube</h2>
        </a>
      </div>
      <div className="nav-section nav-center">
        <form action="#" className="search-form">
          <input type="search" placeholder="Search" className="search-input" required />
          <button className="nav-button search-button">
            <i className="uil uil-search"></i>
          </button>
        </form>
        <button className="nav-button mic-button">
          <i className="uil uil-microphone"></i>
        </button>
      </div>
      <div className="nav-section nav-right">
        <button className="nav-button search-button">
          <i className="uil uil-search"></i>
        </button>
        <button className="nav-button theme-button">
          <i className="uil uil-moon"></i>
        </button>
        <img src="images/user.jpg" alt="User Image" className="user-image" />
      </div>
    </nav>
  );
};

export default Navbar;