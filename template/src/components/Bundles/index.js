import React, { useState, useEffect } from 'react';
import BubbleService from '../../../../server/services/bubbleService.js';
import BundlesList from '../BundlesList/';

const Bundles = () => {
  const [bundles, setBundles ] = useState([]);

  useEffect(() => {
    setBundles(BubbleService.getBundles());
    console.log(bundles);
  });

  return (
    <div>
      <h1>Bundles</h1>
      <BundlesList bundlesFromParent={bundles} />
    </div>
  )
}

export default Bundles;
