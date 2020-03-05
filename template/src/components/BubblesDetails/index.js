import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import BubbleService from '../../../../server/services/bubbleService.js';
import NavigationBar from '../NavigationBar';

const BubblesDetails = (props) => {
  const bubbleList = BubbleService.getProducts();
  const getBubbleId = (id) => {
    for(var i = 0; i < bubbleList.length; i++){
      if(id == bubbleList[i].id){
        return bubbleList[i];
      }
    }
  };

  const [bubblesDetails, setBubblesDetails] = useState(getBubbleId(props.match.params.bubblesItemId));

  const addToCart = () => {
    console.log("add to cart");
  };

  return (
    <div>
      <NavigationBar />
      <h1>{bubblesDetails.name}</h1>
      <p>{bubblesDetails.description}</p>
      <p>{bubblesDetails.price} ISK</p>
      <img src={bubblesDetails.image} alt="" />
      <button onClick={addToCart}>Add to cart</button>
      <button><Link to='/bubbles'>Go back</Link></button>
    </div>
  )
}

export default BubblesDetails;
