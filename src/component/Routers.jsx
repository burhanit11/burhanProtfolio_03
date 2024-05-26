import React from "react";
import { Route, Routes } from "react-router-dom";
import { isHybridRoutes, isPrivateRoutes, isPublicRoutes } from "../router";
import Page404 from "../pages/Page404";
import ProtectedLogin from "./HOC/ProtectedLogin";

const Routers = () => {
  return (
    <div>
      <Routes>
        {isHybridRoutes.map((item) => (
          <Route key={item.path} path={item.path} element={item.component} />
        ))}
        {isPrivateRoutes.map((item) => (
          <Route key={item.path} path={item.path} element={item.component} />
        ))}
        {isPublicRoutes.map((item) => (
          <Route key={item.path} path={item.path} element={item.component} />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default Routers;
