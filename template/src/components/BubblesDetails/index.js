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
    alert("add to cart");
  };

  const goBack = () => {
    console.log('trying to go back');
    window.history.back()
  };

  return (
    <>
    <NavigationBar />
    <div className="detailContainer">
      <h1 className="heading">{bubblesDetails.name}</h1>
      <img src={bubblesDetails.image} alt="" />
      <p className="detailDesc">{bubblesDetails.description}</p>
      <p className="price">{bubblesDetails.price} ISK</p>
      <button onClick={addToCart}>Add to cart</button>
      <button onClick={goBack} >Go back</button>
    </div>
    </>
  )
}

export default BubblesDetails;
