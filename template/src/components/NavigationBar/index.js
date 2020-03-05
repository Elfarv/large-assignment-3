import React from 'react';
import { Link } from 'react-router-dom'
import NavLinks from '../NavLinks';

const NavigationBar = () => (
  <nav className='navbar navbar-dark bg'>
    <div>
      <Link to='/' className='brand-logo'>Bubblify</Link>
    </div>
    <NavLinks />
  </nav>
);

export default NavigationBar;
