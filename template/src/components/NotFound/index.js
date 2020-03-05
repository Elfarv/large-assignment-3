import React from 'react';
import NavigationBar from "../NavigationBar";

const NotFound = ({ location }) => {
  return (
    <div className='not-found'>
      <NavigationBar />
      <h1>404</h1>
      <p>the resource at {location.pathname} was not found. </p>
    </div>
  );
}

export default NotFound;
