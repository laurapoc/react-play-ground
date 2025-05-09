import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Auth = ({ children }) => {
  const [token, ] = useLocalStorage("token", "");

  useEffect(() => {
    console.log("token", token)
  }, [token])

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Auth;
