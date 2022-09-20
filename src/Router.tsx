import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { PgPlantoes } from "./pages/Plantoes";
import { PgFarmacias } from "./pages/Farmacias";
import { PgFarmacia } from "./pages/Farmacias/farmacia";
import { NotFound } from "./pages/NotFound";
import { PgProdutos } from "./pages/Produtos";
import { Pgstory } from "./pages/Story";
import { PgPlantao } from "./pages/Plantoes/plantao";
import { PgProduto } from "./pages/Produtos/produto";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/farmacias" element={<PgFarmacias />} />
      <Route path="/farmacia/:slug" element={<PgFarmacia />} />
      <Route path="/plantoes" element={<PgPlantoes />} />
      <Route path="/plantao/:id" element={<PgPlantao />} />
      <Route path="/produtos" element={<PgProdutos />} />
      <Route path="/produto/:slug" element={<PgProduto />} />
      <Route path="/story" element={<Pgstory />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
