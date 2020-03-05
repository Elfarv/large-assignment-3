import React from "React";
import { Link } from "react-router-dom";

export const CheckOutButtons = props => {
  return (
    <div>
      <h1>Viltu pikka eða senda?</h1>
      <Link to="/cart/checkout/pickup" className="btn btn-primary">
        Pikka
      </Link>
      <Link to="/cart/checkout/delivery" className="btn btn-primary">
        Senda
      </Link>
    </div>
  );
};
