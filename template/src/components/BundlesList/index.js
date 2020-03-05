import React from 'react';
import BundlesItem from '../BundlesItem';
import BubbleService from '../../../../server/services/bubbleService.js';
import BubblesList from '../BubblesList';

const BundlesList = ({ bundlesFromParent }) => {

  return(
    <div>
      { bundlesFromParent.map( n => <BundlesItem
        key={n.id}
        name={n.name}
        items={getBubblesItem(n.items)}
        />) }
    </div>
  )
};

function getBubblesItem(id) {
    let bubbles = BubbleService.getProducts();
    let bubblesList = [];
    for(var i = 0; i < bubbles.length; i++){
      for(var j = 0; j < id.length; j++){
        if(bubbles[i].id == id[j]){
          bubblesList.push(bubbles[i]);
        }
      }
    }
    return ( <BubblesList bubblesFromParent={bubblesList} /> )
  };

export default BundlesList;
