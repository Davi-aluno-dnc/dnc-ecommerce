import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
