import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

const SecureRoute = ({ children }) => {
  const { authState } = useOktaAuth();
  const location = useLocation();

  if (!authState) {
    // Auth state is loading
    return <div>Loading...</div>;
  }

  if (!authState.isAuthenticated) {
    // User not authenticated, redirect to login
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // User authenticated, render children components
  return children;
};

export default SecureRoute;
