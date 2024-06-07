import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Flipkart</div>
      <input type="text" className="search-bar" placeholder="Search for products, brands and more" />
      <div className="nav-links">
        <span>Login</span>
        <span>More</span>
        <span>Cart</span>
      </div>
    </nav>
  );
};

export default Navbar;
