import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { PgPlantoes } from "./pages/Plantoes";
import { PgFarmacia } from "./pages/Farmacias";
import { NotFound } from "./pages/NotFound";
import { PgProdutos } from "./pages/Produtos";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/farmacias" element={<PgFarmacia />} />
      <Route path="/farmacia/:slug" element={<PgFarmacia />} />
      <Route path="/plantoes" element={<PgPlantoes />} />
      <Route path="/plantoe/:slug" element={<PgPlantoes />} />
      <Route path="/produtos" element={<PgProdutos />} />
      <Route path="/produto/:slug" element={<PgProdutos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
