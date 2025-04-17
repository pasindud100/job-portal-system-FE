import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, allowedRoles }) => {
  const userRole = localStorage.getItem("userRole");

  // Check if the user's role is in the allowed roles.
  if (allowedRoles.includes(userRole)) {
    return element; // Allow access to the route
  } else {
    return <Navigate to="/" />; // Redirect to home or another page if not any role...
  }
};

export default ProtectedRoute;