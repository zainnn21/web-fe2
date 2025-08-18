import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/loginpage";
import RegisterPage from "./Pages/registerpage";
import HomePage from "./Pages/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/Register",
    element: <RegisterPage />,
  },
]);

const rootelement = document.getElementById("root");
if (!rootelement) {
  throw new Error("Root element not found");
}

createRoot(rootelement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
