import { Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../Context/AuthContext";

const Protected = ({ children }) => {
  const { user } = useContext(Context);

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default Protected;