import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Homepage from './Components/Homepage';
import Timer from './Components/Timer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "homepage",
        element: <Homepage />,
      },
      {
        path: "timer",
        element: <Timer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={router}
    // fallbackElement={<BigSpinner />}
  />
);
