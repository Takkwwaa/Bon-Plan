import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout, LogLayout } from "./components";
import {
  Login,
  LoginStore,
  Signup,
  SignupStore,
  UserHome,
  UserProfile,
  Home,
  StoreInterface,
} from "./pages";
import Logout from "./components/Logout.jsx";

export const Unauthenticated = createBrowserRouter([
  {
    path: "/",
    element: <LogLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
      { path: "/store/Signup", element: <SignupStore /> },
      { path: "/store/Login", element: <LoginStore /> },
    ],
  },
]);

export const Authenticated = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <UserHome />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/Logout",
        element: <Logout />,
      },
      {
        path: "/storeinterface/:name",
        element: <StoreInterface />,
      },
    ],
  },
]);
