import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

const ProtectedScreen = () => {
  const { currentuser } = useAuthContext();
  return currentuser === null ? <Navigate to="/login" /> : <Outlet />;
};

export default ProtectedScreen;
