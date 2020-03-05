import React, { useContext } from "react";
import { CartContext } from "../CartContext/index";
import BubblesList from "../BubblesList";

const Cart = () => {
  const goBack = () => {
    window.history.back();
  };

  let myCart = JSON.parse(localStorage.getItem("myCart"));
  console.log(myCart);
  let totalPrice = 0;
  myCart.forEach(cartItem => {
    totalPrice += cartItem.price;
  });
  return (
    <div>
      <h1>Cart</h1>
      <span>items in cart : {myCart.length}</span>
      <br />
      <span>total price: {totalPrice} </span>
      <div>
        <BubblesList bubblesFromParent={myCart} skipButton={true} />;
      </div>
      <button className="cartButton" onClick={goBack}>
        Go back
      </button>
    </div>
  );
};

export default Cart;
