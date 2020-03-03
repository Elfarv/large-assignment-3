import React from 'react';

const BubblesItem = ({ name, description, price, image }) => {
  <div className='well bubbles-item'>
    <h3> {name} </h3>
    <p> {description} </p>
    <p> {price} </p>
    <img src={image} alt='' />
  </div>
};

export default BubblesItem;
