import React from 'react';
import BundlesItem from '../BundlesItem';

const BundlesList = ({ bundlesFromParent }) => {
  return(
    <div>
      { bundlesFromParent.map( n => <BundlesItem
        key={n.id}
        name={n.name}
        items={n.items}
        />) }
    </div>
  )
};

export default BundlesList;
