import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/UserContext";
export const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  return (
    <nav className="nav-bar">
      <img src={logo} alt="" />
      <div>
        {/* <a href="/home">Home</a>
        <a href="/shop">Shop</a>
        <a href="/orders">Orders</a>
        <a href="/about">About Us</a> */}
        <Link to={"home"}>Home</Link>
        <Link to={"shop"}>Shop</Link>
        <Link to={"orders"}>Orders</Link>
        <Link to={"about-us"}>About Us</Link>
        {user?.uid ? (
          <button onClick={signOutUser} className="btn-custom">
            <FontAwesomeIcon icon={faSignOut} /> Sign Out
          </button>
        ) : (
          <>
            <Link to={"login"}>Log In</Link>
            <Link to={"signup"}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};
