import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#">Restaurants</a></li>
        <li className="navbar-item"><a href="#">Cuisines</a></li>
        <li className="navbar-item"><a href="#">Offers</a></li>
        <li className="navbar-item"><a href="#">Account</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
