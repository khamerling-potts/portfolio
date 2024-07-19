import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
import routes from "./routes";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

// const router = createBrowserRouter(routes, { basename: "/portfolio" });
//Using Hash Router to try to get it to cooperate with GH pages
const router = createHashRouter(routes);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
