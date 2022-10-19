import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const auth = getAuth(app);

export const AuthContext = createContext();
export const UserContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
      console.log(currUser, user);
    });

    return () => unsubscribe();
  }, []);

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const signInUsr = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const signOutUser = () => signOut(auth);
  return (
    <AuthContext.Provider
      value={{ loading, user, createUser, signInUsr, signOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
