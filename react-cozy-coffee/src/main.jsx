import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CozyCoffeeProvider } from "./context/CozyCoffeeProvider";
import router from "./router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CozyCoffeeProvider>
      <RouterProvider router={router} />
    </CozyCoffeeProvider>
  </React.StrictMode>
);
