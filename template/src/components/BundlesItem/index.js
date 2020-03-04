import React from 'react';

const BundlesItem = ({ name, item }) => {
  return(
    <div className='well bundles-item'>
      <h3> {name} </h3>
      <p> {item} </p>
    </div>
  )
};

export default BundlesItem;
