import React, { useState } from "react";

export const ConfirmCheckout = props => {
  const [order, setOrder] = React.useState("");

  return (
    <div>
      <div>Hér á að vera order</div>
      <button>Submit</button>
    </div>
  );
};
