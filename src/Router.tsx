import { Route, Routes } from "react-router-dom";
import { PgFarmacia } from "./pages/Farmacias";

import Home from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/farmacias" element={<PgFarmacia />} />
    </Routes>
  );
}
