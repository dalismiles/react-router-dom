import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Recipe from "./Pages/Recipe";
import ErrorPage from "./Pages/ErrorPage";
import RecipeIngredients from "./components/RecipeIngredients";
import RecipeInstructions from "./components/RecipeInstructions";
import RecipePlayer from "./components/RecipePlayer";

import "./index.css";
import App from "./App";

import { ENDPOINTS } from "./api/endpoints.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          return fetch(ENDPOINTS.CATEGORIES);
        },
      },
      {
        path: "/catalogo",
        element: <Navigate to={"/"} />,
      },
      {
        path: "/catalogo/:categoryName",
        children: [
          {
            path: "",
            element: <Category />,
            loader: ({ params }) => {
              return fetch(`${ENDPOINTS.FILTER}?c=${params?.categoryName}`);
            },
          },
          {
            path: ":recipeName/:id",
            element: <Recipe />,
            children: [
              { path: "", element: <Navigate to={"istruzioni"} /> },
              { path: "ingredienti", element: <RecipeIngredients /> },
              { path: "istruzioni", element: <RecipeInstructions /> },
              { path: "youtube", element: <RecipePlayer /> },
            ],
            loader: ({ params }) => {
              return fetch(`${ENDPOINTS.DETEAIL}?i=${params?.id}`);
            },
          },
        ],
      },
      { path: "*", element: <ErrorPage status={404} /> },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


// const LazyRecipe = React.lazy(() => import('./pages/Recipe/Recipe.jsx'));