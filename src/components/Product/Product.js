import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

export const Product = ({ product, addToCart }) => {
  const {
    id,
    category,
    seller,
    name,
    price,
    stock,
    ratings,
    ratingsCount,
    img,
    quantity,
  } = product;
  // console.log(props.addToCart("124e13b9-2d54-4b2f-a74d-a77b362d6ead"));
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="details">
        <h4 style={{ marginBottom: "10px", marginTop: "10px" }}>{name}</h4>
        <span style={{ fontSize: "1.2rem" }}>Categoty: {category}</span>
        <h5
          style={{
            fontSize: "1.33rem",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          Price: ${price}
        </h5>
        <p>Seller: {seller}</p>
        <p>Stock Left: {stock}</p>
      </div>
      <button className="btn" onClick={() => addToCart(product)}>
        Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};
