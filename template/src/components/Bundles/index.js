import React, { useState, useEffect } from 'react';
import BubbleService from '../../../../server/services/bubbleService.js';
import BundlesList from '../BundlesList/';
import NavigationBar from '../NavigationBar';

const Bundles = () => {
  const [bundles, setBundles ] = useState([]);

  useEffect(() => {
    setBundles(BubbleService.getBundles());
    console.log(bundles);
  });

  return (
    <div>
      <NavigationBar />
      <h1 className='heading'>Bundles</h1>
      <BundlesList bundlesFromParent={bundles} />
    </div>
  )
}

export default Bundles;
