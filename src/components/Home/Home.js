import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContext";

export const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return <div>Welcome Home {user?.email || "User"}</div>;
};
