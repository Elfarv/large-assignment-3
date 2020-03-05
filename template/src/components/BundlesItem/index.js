import React from 'react';

const BundlesItem = ({ name, items }) => {
  return(
    <div className='bundleContainer'>
      <h3 className="bundleTitle"> {name} </h3>
      <div> {items} </div>
      <button className="bundleButton"> Add bundle to cart</button>
    </div>
  )
};

export default BundlesItem;
