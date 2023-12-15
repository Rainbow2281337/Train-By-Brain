import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../routes";
import { MAIN_ROUTE } from "../utils/consts";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
