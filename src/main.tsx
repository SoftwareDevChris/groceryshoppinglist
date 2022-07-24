import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.scss";

import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import GroceryList from "./pages/GroceryList";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "Roboto",
        colorScheme: "dark",
        defaultRadius: "sm",
        loader: "dots",
        other: {
          fontLato: "Lato",
          fontMontserrat: "Montserrat",
          fontPoppins: "Poppins",
          fontLobster: "Lobster",
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="shopping-list" element={<GroceryList />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
