import React from 'react';
import BubblesItem from '../BubblesItem';

const BubblesList = ({ bubblesFromParent }) => {
  return(
    <div className="bubbles-list">
      { bubblesFromParent.map( n => <BubblesItem className='box'
        key={n.id}
        id={n.id}
        name={n.name}
        price={n.price}
        description={n.description}
        image={n.image}
        />) }
    </div>
  )
};

export default BubblesList;
