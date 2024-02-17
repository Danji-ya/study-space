import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Window from "./routes/Window.jsx";

export const TEST_URL = "/window";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: TEST_URL,
    element: <Window />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
