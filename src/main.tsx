import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Components/Templates/Layout.tsx";
import Home from "./Components/Pages/Home.tsx";
import MagicGirl from "./Components/Pages/MagicGirl.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="magical-girls">
            <Route index element={<MagicGirl />} />
            <Route path=":id" element={<MagicGirl />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
