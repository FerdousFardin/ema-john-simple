import { Children, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/layouts/Main";
import { Shop } from "./components/Shop/Shop";
import { Home } from "./components/Home/Home";
import { Orders } from "./components/Orders/Orders";
import { About } from "./components/About/About";
import { shopAndCartLoader } from "./loader/shopAndCartLoader";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SingUp/SignUp";
import { AuthContext } from "./context/UserContext";
import { Shipping } from "./components/Shipping/Shipping";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/shop",
          element: <Shop />,
          loader: () => fetch("products.json"),
        },
        { path: "/", element: <Home></Home> },
        { path: "home", element: <Home /> },
        {
          path: "orders",
          element: <Orders />,
          loader: shopAndCartLoader,
        },
        { path: "about-us", element: <About /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
        {
          path: "shipping",
          element: (
            <PrivateRoute>
              <Shipping />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
