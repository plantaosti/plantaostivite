import React from "react";
import { Farmacia } from "./components/Farmacia";
import { Header } from "./components/Header";
import { Slide } from "./components/Slide";

function App() {
  return (
    <>
      <Header />
      <main className="mt-20 w-full  antialiased">
        <Slide />
        <Farmacia />
      </main>
    </>
  );
}

export default App;
