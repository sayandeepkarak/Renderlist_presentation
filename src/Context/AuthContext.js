import React, { useContext, useState } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  // FacebookAuthProvider,
  // getRedirectResult,
  signOut,
} from "firebase/auth";
import { auth, db } from "../Firebase";
import { addDoc, collection } from "firebase/firestore";

const authContext = createContext();

export const AuthContext = ({ children }) => {
  const [currentuser, setcurrentuser] = useState(null);
  const googleprovider = new GoogleAuthProvider();
  // const facebookprovider = new FacebookAuthProvider();

  const handlegooglesignup = async () => {
    await signInWithPopup(auth, googleprovider)
      .then((result) => {
        setcurrentuser({
          name: result.user.displayName,
          email: result.user.email,
          photoUrl: result.user.photoURL,
        });
        addDoc(collection(db, "AllAccounts"), currentuser);
        console.log(currentuser);
      })
      .catch((exp) => {
        console.error(exp);
      });
  };

  const handlefacebooksignup = () => {
    try {
    } catch (exp) {
      console.log(exp);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const value = {
    currentuser,
    handleLogout,
    handlegooglesignup,
    handlefacebooksignup,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(authContext);
};
