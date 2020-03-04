import React from 'react';
import BubblesItem from '../BubblesItem';

const BubblesList = ({ bubblesFromParent }) => {
  return(
    <div>
      { bubblesFromParent.map( n => <BubblesItem
        key={n.id}
        name={n.name}
        description={n.description}
        image={n.image}
        />) }
    </div>
  )
};

export default BubblesList;
