import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const authContext = createContext();

export const AuthContext = ({ children }) => {
  const [currentuser, setcurrentuser] = useState(null);
  useEffect(() => {
    setcurrentuser(null);
  }, []);
  const value = { currentuser };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(authContext);
};
