import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  loadCartFromStorage,
} from "../../utilities/fakedb";
import { Cart } from "../Cart/Cart";
import { Product } from "../Product/Product";
import "./Shop.css";

export const Shop = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const shoppingCartStored = loadCartFromStorage();
    // console.log(shoppingCartStored);
    const savedCart = [];
    for (const id in shoppingCartStored) {
      const savedProduct = products.find((product) => id === product.id);
      if (savedProduct) {
        savedProduct.quantity = shoppingCartStored[id];
        savedCart.push(savedProduct);
      }
    }
    setCart(savedCart);
    // console.log(savedCart);
  }, [products]);
  const addToCart = (selectedProduct) => {
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (exists) {
      exists.quantity += 1;
      const rest = cart.filter((product) => selectedProduct.id !== product.id);
      setCart([...rest, exists]);
    } else {
      selectedProduct.quantity = 1;
      setCart([...cart, selectedProduct]);
    }
    console.log(cart);
    addToDb(selectedProduct.id);
  };
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  // console.log("clicked");
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            addToCart={addToCart}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart clearCart={clearCart} cart={cart}></Cart>
      </div>
    </div>
  );
};
