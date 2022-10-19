import React from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { sumHandler } from "../../utilities/utility";
import { InformationCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
export const Cart = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  const quantity = sumHandler(cart, "quantity");
  const priceTotal = sumHandler(cart, "price", "quantity");
  const shipTotal = sumHandler(cart, "shipping", "quantity");
  const tax = Number((priceTotal * 0.1).toFixed(2));
  return (
    <div className="cart">
      <h1>Order Summary</h1>
      <h2 style={{ fontWeight: "normal" }}>
        {/* Selected Items: {quantity > cart.length ? quantity : cart.length} */}
        Selected Items: {quantity}
      </h2>
      <h3 style={{ fontWeight: "normal" }}>Total Price: ${priceTotal}</h3>
      <h3 style={{ fontWeight: "normal" }}>
        Total Shipping Charge: ${shipTotal}
      </h3>
      <h3 style={{ fontWeight: "normal" }}>Tax: ${tax}</h3>
      <h2>Grand Total: ${priceTotal + shipTotal + tax}</h2>
      <button onClick={clearCart} className="clear-all-btn">
        Clear All <TrashIcon />
      </button>
      <button onClick={() => navigate("/orders")} className="review-btn">
        Review Order <InformationCircleIcon />
      </button>
      <button onClick={() => navigate("/shipping")} className="review-btn">
        Shipping <InformationCircleIcon />
      </button>
    </div>
  );
};
