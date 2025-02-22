import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout.tsx";
import App from "./App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout children={<App />} />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
