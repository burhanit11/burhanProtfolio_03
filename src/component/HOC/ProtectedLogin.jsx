import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedLogin = ({ element }) => {
  const userData = useSelector((state) => {
    return state.authUser;
  });

  console.log(userData, "userdata");
  if (!userData) {
    return <Navigate to={"/login"} />;
  } else {
    return element;
  }
};

export default ProtectedLogin;
