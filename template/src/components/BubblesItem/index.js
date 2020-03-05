import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { Route, Redirect, Link } from "react-router-dom";

export const BubblesItem = ({
  id,
  name,
  description,
  price,
  image,
  skipButton
}) => {
  const addToCart = item => {
    let cartArr = JSON.parse(localStorage.getItem("myCart") || "[]");
    cartArr.push(item);
    localStorage.setItem("myCart", JSON.stringify(cartArr));
  };

  const productClicked = e => {
    const bubblesID = e.target.id;
  };

  return (
    <div id={`/${id}`} onClick={productClicked} className="bubbles-item">
      <h3>
        {" "}
        <Link to={`/bubbles/${id}`}>{name} </Link>{" "}
      </h3>
      <img src={image} alt="" />
      <p className="desc"> {description} </p>
      <p className="price"> {price} ISK.</p>
      {skipButton !== true && (
        <button
          className="btn btn-primary"
          onClick={() =>
            addToCart({
              id,
              name,
              image,
              description,
              price
            })
          }
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default BubblesItem;
