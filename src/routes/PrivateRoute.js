import React, { useContext } from "react";
import { AuthContext } from "../context/UserContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // console.log(user);
  const location = useLocation();
  if (user && user?.uid) {
    return <>{children}</>;
  } else if (loading) {
    return <h1>Loading...</h1>;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};
