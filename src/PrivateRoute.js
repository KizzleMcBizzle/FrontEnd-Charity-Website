import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = () => {
  const user = useAuth();
  if (user.role === 'admin') return <Outlet />;
  return <Navigate to="/signin" />;
  
};

export default PrivateRoute;