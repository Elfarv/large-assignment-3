import React, { useContext } from "react";
import { CartContext } from "../CartContext/index";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <div>
      <h1>Cart</h1>
      <span>items in cart : {cart.length}</span>
      <br />
      <span>total price: 0 </span>
    </div>
  );
};

export default Cart;
