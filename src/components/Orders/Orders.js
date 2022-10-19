import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { Cart } from "../Cart/Cart";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import "./Orders.css";

export const Orders = () => {
  const { products, prevCart } = useLoaderData();
  const [cart, setCart] = useState(prevCart);
  const handleDeleteItems = (id) => {
    setCart(cart.filter((p) => p.id !== id));
    removeFromDb(id);
  };
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItem
            handleDeleteItems={handleDeleteItems}
            product={product}
            key={product.id}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart clearCart={clearCart} cart={cart}></Cart>
      </div>
    </div>
  );
};
