import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import {Route, Redirect,Link} from 'react-router-dom';

export const BubblesItem = ({ id, name, description, price, image }) => {
  //const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    console.log("add to cart");
    //setCart(curr => [...curr, bubble]);
  };

  const productClicked = (e) => {
    console.log("productClicked");
    const bubblesID = e.target.id;
    console.log(bubblesID);
  };

  return (
    <div id={`/${id}`} onClick={productClicked} className="well bubbles-item">
      <h3> <Link to={`/bubbles/${id}`}>{name} </Link> </h3>
      <p> {description} </p>
      <p> {price} ISK.</p>
      <img src={image} alt="" />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default BubblesItem;
