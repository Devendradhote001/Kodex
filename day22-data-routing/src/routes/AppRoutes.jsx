import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const AppRoutes = () => {
  let router = createBrowserRouter([]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
