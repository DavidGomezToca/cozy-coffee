import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./views/Home";
import AuthLayout from "./layouts/AuthLayout";
import LogIn from "./views/LogIn";
import SignUp from "./views/SignUp";
import AdminLayout from "./layouts/AdminLayout";
import Orders from "./views/Orders";
import Products from "./views/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <LogIn />,
      },
      {
        path: "/auth/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Orders />,
      },
      {
        path: "/admin/products",
        element: <Products />,
      },
    ],
  },
]);

export default router;
