import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGbp, G } from "@fortawesome/free-solid-svg-icons";
// import {G} from '@fortawesome/fontawesome-svg-core
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
//npm i --save @fortawesome/free-brands-svg-icons
import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../context/UserContext";

export const Login = () => {
  const navigate = useNavigate();
  const { signInUsr } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/shop";
  console.log(from);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUsr(email, password)
      .then((res) => {
        console.log(res.user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((er) => console.error(er));
  };
  return (
    <div className="border-1 rounded w-1/3 form-wrapper">
      <h1>Login</h1>
      <form onSubmit={handleSignIn} className="flex form-body">
        <label htmlFor="email">Email</label>
        <input
          autoComplete="true"
          type="email"
          name="email"
          id="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
        <button className="btn-custom login-btn" type="submit">
          Login
        </button>
        <div className="link-signup-wrapper">
          <small>
            New to Ema-John?{" "}
            <Link className="link-signup" to={"/signup"}>
              Create a New Account
            </Link>
          </small>
        </div>
      </form>
      <div className="divider-wrapper">
        <span className="divider">or</span>
      </div>
      <button className="btn-custom btn-login-methods">
        <FontAwesomeIcon icon={faGoogle} /> Sign In Using Google
      </button>
    </div>
  );
};
