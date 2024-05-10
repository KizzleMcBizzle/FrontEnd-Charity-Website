import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const DonorPrivateRoute = () => {
  const user = useAuth();
  console.log(user);
  if (user.role === 'Regular' || user.role === 'doctor' || user.role === 'teacher') return <Outlet />;
  return <Navigate to="/signin" />;
};

export default DonorPrivateRoute;