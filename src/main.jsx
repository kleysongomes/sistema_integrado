import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/layout";
import "./index.css";
import theme from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello world!</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </ThemeProvider>
  </React.StrictMode>
);