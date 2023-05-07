import React from 'react';
import './Navbar.css';

const Navbar = ({ handleGetUsers, handleHome }) => {
  return (
    <nav className='Navbar'>
      <div className='brand'>GUCCI</div>
      <ul> 
        <li><a href="#" onClick={handleHome}>Home</a></li>
      </ul>
      <button onClick={handleGetUsers} className='button'>Get Users</button>
    </nav>
  );
};

export default Navbar;
