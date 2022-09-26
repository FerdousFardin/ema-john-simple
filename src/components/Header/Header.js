import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

export const Header = () => {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="" />
      <div>
        <a href="/home">Home</a>
        <a href="/shop">Shop</a>
        <a href="/orders">Orders</a>
        <a href="/about">About Us</a>
      </div>
    </nav>
  );
};
