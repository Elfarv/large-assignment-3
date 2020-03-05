import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import {Route, Redirect,Link} from 'react-router-dom';

export const BubblesItem = ({ id, name, description, price, image }) => {
  //const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    alert("add to cart");
    //setCart(curr => [...curr, bubble]);
  };

  const productClicked = (e) => {
    const bubblesID = e.target.id;
  };

  return (
    <div id={`/${id}`} onClick={productClicked} className="bubbles-item">
      <h3> <Link to={`/bubbles/${id}`}>{name} </Link> </h3>
      <img src={image} alt="" />
      <p className="desc"> {description} </p>
      <p className="price"> {price} ISK.</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default BubblesItem;
