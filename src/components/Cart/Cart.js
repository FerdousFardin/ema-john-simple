import React from "react";

export const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Cart Item Total: {cart.length}</h1>
    </div>
  );
};
