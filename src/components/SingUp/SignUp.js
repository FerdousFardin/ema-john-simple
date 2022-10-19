import { isSignInWithEmailLink } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import "./SignUp.css";

export const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if (password !== confirmPassword) {
      setError("Both Passwords must be same!");
      return;
    } else if (password.length < 8 && confirmPassword.length) {
      setError("Password should be atleast 8 characters!");
      return;
    } else {
      setError("");
    }
    // console.log(email, password, confirmPassword);
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        form.reset();
      })
      .catch((er) => console.error(er));
  };
  return (
    <div className="border-1 rounded w-1/3 form-wrapper">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp} className="flex form-body">
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
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirm-password"
          required
        />
        {error && <p className="error-message">*{error}</p>}
        <button className="btn-custom btn-signup" type="submit">
          Sign Up
        </button>
        <div className="link-signup-wrapper">
          <small>
            Already Have an Account?{" "}
            <Link className="link-signup" to={"/login"}>
              Sign In Here
            </Link>
          </small>
        </div>
      </form>
    </div>
  );
};
