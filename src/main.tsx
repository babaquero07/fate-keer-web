import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Components/Templates/Layout.tsx";
import Home from "./Components/Pages/Home.tsx";
import MagicGirl from "./Components/Pages/MagicGirl.tsx";
import Create from "./Components/Pages/Create.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="magical-girls">
            <Route path=":id" element={<MagicGirl />} />
            <Route path="/magical-girls/create" element={<Create />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
