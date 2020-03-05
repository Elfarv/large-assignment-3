import React from 'react';
import { Link } from 'react-router-dom'
import NavLinks from '../NavLinks';

const NavigationBar = () => (
  <nav className='navbar navbar-dark bg'>
    <div>
      <a href='/' className='logo'><img src="https://img.icons8.com/material-outlined/24/000000/bubble.png"/>Bubblify</a>
    </div>
    <NavLinks />
  </nav>
);

export default NavigationBar;
