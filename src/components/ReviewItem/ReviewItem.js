import React from "react";
import "./ReviewItem.css";
import { TrashIcon } from "@heroicons/react/24/solid";

export const ReviewItem = ({
  product: { id, quantity, name, img, shipping, price },
  handleDeleteItems,
}) => {
  return (
    <section className="review-section">
      <div className="review-product">
        <img src={img} alt="" />
        <div>
          <h3>{name}</h3>
          <p>
            Price: <span style={{ color: "#FF9900" }}>${price}</span>
          </p>
          <p>
            Shipping: <span style={{ color: "#FF9900" }}>${shipping}</span>
          </p>
          <p>
            Quantity: <strong>{quantity} </strong>
          </p>
        </div>
      </div>
      <div>
        <button onClick={() => handleDeleteItems(id)} className="delete-btn">
          <TrashIcon className="icon" />
        </button>
      </div>
    </section>
  );
};
