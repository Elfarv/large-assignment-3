import React, { useContext } from "react";
import { CartContext } from "../CartContext/index";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const goBack = () => {
    window.history.back()
  };

  return (
    <div>
      <h1>Cart</h1>
      <span>items in cart : {cart.length}</span>
      <br />
      <span>total price: 0 </span>
      <button className="cartButton" onClick={goBack}>Go back</button>
    </div>
  );
};

export default Cart;
