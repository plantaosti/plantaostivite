import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import { PgPlantoes } from "./pages/Plantoes";
import { PgFarmacia } from "./pages/Farmacias";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/farmacias" element={<PgFarmacia />} />
      <Route path="/farmacia/:slug" element={<PgFarmacia />} />
      <Route path="/plantoes" element={<PgPlantoes />} />
      <Route path="/plantoe/:slug" element={<PgPlantoes />} />
    </Routes>
  );
}
