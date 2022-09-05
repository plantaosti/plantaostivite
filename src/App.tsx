import React from "react";
import { Farmacia } from "./components/Farmacia";
import { Header } from "./components/Header";
import { Newsletter } from "./components/News";
import { Slide } from "./components/Slide";
import { Tutoriais } from "./components/Tutoriais";

function App() {
  return (
    <>
      <Header />
      <main className="mt-20 w-full  antialiased dark:bg-gray-200">
        <Slide />
        <Farmacia />
        <Tutoriais />
        <Newsletter />
      </main>
    </>
  );
}

export default App;
