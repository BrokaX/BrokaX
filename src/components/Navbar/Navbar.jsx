import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';

function Navbar() {
  return (
    <div className='navbar-container'>
      <img className='app-logo' src={logo} alt='BrokaX Logo' />
      <ul className='menu-list'>
        <li className='menu-items'>About</li>
        <li className='menu-items'>Contact</li>
        <li className='menu-items'>PortFolio</li>
      </ul>
    </div>
  );
}

export default Navbar