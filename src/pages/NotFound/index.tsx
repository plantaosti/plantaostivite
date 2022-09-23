import React from "react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-ignite-gray-1">
      <div className="flex flex-col text-center leading-relaxed text-ignite-primary-light">
        <h1 className="text-[4rem] font-bold text-gray-500">404</h1>
        <span className="text-green-600">Página não encontrada!</span>
        <Link
          to={"/"}
          title="Voltar para a página inicial."
          className="bg-green-600 px-4 py-3 mt-4 flex justify-center text-white hover:bg-gray-400 transition-all duration-300 dark:bg-gray-600 dark:hover:bg-gray-400"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}
