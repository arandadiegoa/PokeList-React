import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PokeState } from "./state/state";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Description from "./pages/Description";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
  },
  {
    path: "/description/:id",
    element: (
      <div>
        <Description />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <PokeState>
      <RouterProvider router={router} />
    </PokeState>
  </div>
);
