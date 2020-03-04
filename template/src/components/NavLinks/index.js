import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => (
    <ul className='nav-links'>
      <li>
        <Link to='/bubbles'>Bubbles</Link>
      </li>
      <li>
        <Link to='/bundles'>Bundles</Link>
      </li>
      <li>
        <Link to='/about'>About Us</Link>
      </li>
      <li>
        <Link to='/cart'>Cart</Link>
      </li>
    </ul>
);

export default NavLinks;
