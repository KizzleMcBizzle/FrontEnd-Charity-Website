import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const OrgPrivateRoute = () => {
  const user = useAuth();
  console.log(user);
  if (user.role === 'organization') return <Outlet />;
  return <Navigate to="/signin" />;
};

export default OrgPrivateRoute;