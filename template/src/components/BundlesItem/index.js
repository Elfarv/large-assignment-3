import React from 'react';

const BundlesItem = ({ name, items }) => {
  console.log('inside');
  console.log(items); //undefined
  return(
    <div className='well bundles-item'>
      <h3> {name} </h3>
      <div> {items} </div>
    </div>
  )
};

export default BundlesItem;
