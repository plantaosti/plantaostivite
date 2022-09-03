import { Logo } from "./Logo";
import { SoccerBall, SquaresFour, Bell, X } from "phosphor-react";
import { useEffect, useState } from "react";
import classNames from "classnames";
import IconePlantoes from "./IconePlantoes";
import IconePlantao from "./IconePlantao";
import IconeFarmacia from "./IconeFarmacia";
import IconeProdutos from "./IconeProdutos";

export function Header() {
  return (
    <>
      <header className="bg-white flex justify-center shadow shadow-md w-full fixed top-0 left-0 z-50 h-20">
        <div className="flex justify-between w-5/6 max-w-5xl">
          <div className="flex items-center">
            <Logo />
            <span className="text-xl tracking-tight ml-3 text-neutral-500">
              PLANTAO STI.
            </span>
          </div>

          <div className="hidden lg:flex items-center">
            <div className="text-sm lg:flex-grow">
              <a
                href="#"
                className="block text-xl mt-4 lg:inline-block lg:mt-0 text-neutral-500 hover:text-blue-700 mr-4"
              >
                Plantoes
              </a>
              <a
                href="#"
                className="block text-xl mt-4 lg:inline-block lg:mt-0 text-neutral-500 hover:text-blue-700 mr-4"
              >
                Plantao
              </a>
              <a
                href="#"
                className="block text-xl mt-4 lg:inline-block lg:mt-0 text-neutral-500 hover:text-blue-700 mr-4"
              >
                Farmacias
              </a>
              <a
                href="#"
                className="block text-xl mt-4 lg:inline-block lg:mt-0 text-neutral-500 hover:text-blue-700 mr-4"
              >
                Produtos
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <a href="#">
              <Bell size={32} className="hover:fill-blue-700" color="#737373" />
            </a>
          </div>
        </div>
      </header>

      <div className="fixed z-50 inset-0 overflow-y-auto lg:hidden">
        <div className="relative bg-white w-80 max-w-[100%-3rem]  h-full p-6 dark:bg-slate-800">
          <button className="absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-300">
            <span className="sr-only">Fechar Menu</span>
            <X size={24} />
          </button>
          <nav className="lg:text-sm lg:leading-6 relative">
            <ul>
              <li>
                <a
                  href="#"
                  className="group flex items-center lg:text-sm lg:leading-6 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 mb-5"
                >
                  <div className="mr-4 ">
                    <IconePlantoes />
                  </div>
                  Plantões
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center lg:text-sm lg:leading-6 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 mb-5"
                >
                  <div className="mr-4 ">
                    <IconePlantao />
                  </div>
                  Plantão
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center lg:text-sm lg:leading-6 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 mb-5"
                >
                  <div className="mr-4 ">
                    <IconeFarmacia />
                  </div>
                  Farmácias
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center lg:text-sm lg:leading-6 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 mb-5"
                >
                  <div className="mr-4 ">
                    <IconeProdutos />
                  </div>
                  Produtos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
