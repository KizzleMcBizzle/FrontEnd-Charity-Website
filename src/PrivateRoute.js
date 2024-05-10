import React from "react";
import { Redirect, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = ({children}) => {
  const user = useAuth();
  if (!user.token) return <Redirect to="/signin" />;
  return children;
};

export default PrivateRoute;