import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { AnimatePresence, motion } from "framer-motion";

import "./index.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
