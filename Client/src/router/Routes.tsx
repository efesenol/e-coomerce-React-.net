import { createBrowserRouter, Navigate } from "react-router";
import App from "../components/App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CatlogPage from "../pages/catalog/CatalogPage";
import ProductDetailsPage from "../pages/catalog/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "catalog", element: <CatlogPage /> },
      { path: "error", element: <ErrorPage /> },
      { path: "server-error", element: <ServerError /> },
      { path: "catalog/:id", element: <ProductDetailsPage /> },
      { path: "not-found", element: <NotFound /> },
      { path: "*", element: <Navigate to="/not-found" />}
    ],
  },
]);
