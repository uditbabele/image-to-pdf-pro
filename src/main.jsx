import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    <Toaster
      position="top-right"
    />

    <Analytics />
  </React.StrictMode>
);