import React, { useState, useEffect } from "react";
import BubbleService from "../../../../server/services/bubbleService.js";
import BubblesList from "../BubblesList/";
import NavigationBar from "../NavigationBar";

const Bubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    setBubbles(BubbleService.getProducts());
  });

  return (
    <div>
      <NavigationBar />
      <h1 className="heading">Bubbles</h1>
      <BubblesList bubblesFromParent={bubbles} skipButton={false} />
    </div>
  );
};

export default Bubbles;
