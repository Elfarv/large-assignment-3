import React, { useContext } from "react";
import { CartContext } from "../CartContext";

export const BubblesItem = ({ name, description, price, image }) => {
  //const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    console.log("add to cart");
    //setCart(curr => [...curr, bubble]);
  };
  return (
    <div className="well bubbles-item">
      <h3> {name} </h3>
      <p> {description} </p>
      <p> {price} </p>
      <img src={image} alt="" />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default BubblesItem;
