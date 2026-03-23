import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import "./index.css";
import SignUpPage from "./pages/SignUpPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import ProtectedRoute from "./middlewares/ProtectedRoute.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <AboutPage />, // now becomes child
      },
      {
        path: "/contact", // now becomes child
        element: <ContactPage />,
      },
      {
        path: "/service", // now becom child e
        element: <ServicePage />,
      }
    ],
  },
  {
    path:"/signup",
    element: <SignUpPage />,
  },
  {
    path: "/product/:productId", // :productId is the dynamic segment
    element: <ProductPage />,
  },
  {
    path: "/profile", // profile page is protected
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/settings", // settings page is protected
    element: (
      <SettingsPage />
    ),
  },
  {
    path: "/login",
    element: (
      <LoginPage />
    )
  },
  {
    path: "*", // matches everything that did not match above
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);



