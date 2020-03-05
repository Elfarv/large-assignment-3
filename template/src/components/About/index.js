import React from 'react';
import NavigationBar from '../NavigationBar';

const About = () => {
  return (
    <>
    <NavigationBar />
    <div className="aboutContainer">
      <h1 className="heading">About us</h1>
      <p className="aboutP">
        Bubblify started in the year 2020, and has grown month by month.
        We started out because we want to make sure that bubbles are accessible for every person on the planet.
        And we thought the best way was to create a website which ships all over the world.
        Make bubbles not war!</p>
      </div>
    </>
  )
}

export default About;
