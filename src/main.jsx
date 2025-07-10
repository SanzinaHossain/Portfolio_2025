/*
Author: Sanzina Hossain
Organization: Niret InfoTech Limited
All right reserved by @niret_dev
*/

import React from "react";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Screen/Home/index.jsx";
import Blog from "./components/Screen/Blog/index.jsx";
import Project from "./components/Screen/Project/index.jsx";
import About from "./components/Screen/About/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
      router={router}
    />
  </React.StrictMode>
);
