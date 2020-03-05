import React from 'react';
import NavigationBar from '../NavigationBar';

const Homescreen = () => {
  return(
    <>
    <NavigationBar />
    <div className="homeContainer">
      <h1 className="homeH1">WELCOME TO BUBBLIFY</h1>
      <p>The greatest bubble seller in the world!</p>
      <a href='/bubbles' className="homeButton">See our collection of bubbles </a>
      <a href='/bundles' className="homeButton">See our collection of bundles </a>
    </div>
    </>
  )
}

export default Homescreen;
