import React, { useState, useEffect } from 'react';
import BubbleService from '../../../../server/services/bubbleService.js';
import BubblesList from '../BubblesList/';

const Bubbles = () => {
  const [bubbles, setBubbles ] = useState([]);

  useEffect(() => {
    setBubbles(BubbleService.getProducts());
  });

  return (
    <div>
      <h1>Bubbles</h1>
      <BubblesList bubblesFromParent={bubbles} />
    </div>
  )
}

export default Bubbles;
