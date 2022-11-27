import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

const ProtectedScreen = (WrappedScreen) => {
  const { currentuser } = useAuthContext();
  return currentuser === null ? <WrappedScreen /> : <Navigate to="/login" />;
};

export default ProtectedScreen;
