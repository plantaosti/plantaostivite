import { Logo } from "./Logo";
import { X, List } from "phosphor-react";
import { useState } from "react";
import classNames from "classnames";
import IconePlantoes from "./IconePlantoes";
import IconePlantao from "./IconePlantao";
import IconeFarmacia from "./IconeFarmacia";
import IconeProdutos from "./IconeProdutos";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-white flex justify-center shadow shadow-md w-full fixed top-0 left-0 z-[90] h-20 antialiased dark:bg-gray-600">
        <div className="flex justify-between w-5/6 max-w-5xl">
          <a href="/" className="flex items-center">
            <Logo />
            <span className="text-xl tracking-tight ml-3 text-gray-400 dark:text-gray-200">
              PLANTAO STI.
            </span>
          </a>

          <div className="hidden lg:flex items-center">
            <div className="text-sm lg:flex-grow">
              <nav>
                <ul className="flex gap-6">
                  <li>
                    <a
                      href="#"
                      className="block text-sm mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-green-500 mr-4 lg:text-lg dark:text-gray-100 dark:hover:text-gray-200"
                    >
                      Plantoes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-sm mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-green-500 mr-4 lg:text-lg dark:text-gray-100 dark:hover:text-gray-200"
                    >
                      Plantao
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-sm mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-green-500 mr-4 lg:text-lg dark:text-gray-100 dark:hover:text-gray-200"
                    >
                      Farmacias
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-sm mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-green-500 mr-4 lg:text-lg dark:text-gray-100 dark:hover:text-gray-200"
                    >
                      Produtos
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="flex items-center">
            {/* <a href="#">
              <Bell size={32} className="hover:fill-blue-700" color="#737373" />
            </a> */}
            <button
              className="lg:hidden dark:text-gray-200"
              onClick={() => setOpen(!open)}
            >
              <List size={32} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={classNames(
          "z-[100] fixed inset-0 overflow-y-auto lg:hidden bg-transparent uration-300 transition-all",
          {
            "right-[-100%]": open === true,
            "right-[100%] fixed": open === false,
          }
        )}
      >
        <div className="relative bg-white w-80 max-w-[100%-3rem]  h-full p-7 dark:bg-gray-600 shadow shadow-lg shadow-gray-200">
          <button
            className="absolute z-50 top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-green-500 dark:text-slate-300"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Fechar Menu</span>
            <X size={32} />
          </button>
          <nav className="lg:text-sm lg:leading-6 relative">
            <ul className="flex-row justify-center mt-6">
              <li>
                <a
                  href="#"
                  className="group flex items-center lg:text-sm lg:leading-6 text-xl font-medium text-slate-700 hover:text-green-500 dark:text-gray-200 dark:hover:text-slate-300 mb-5"
                >
                  <div className="mr-6 ">
                    <IconePlantoes />
                  </div>
                  Plantões
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center lg:text-sm lg:leading-6 text-xl font-medium text-slate-700 hover:text-green-500 dark:text-gray-200 dark:hover:text-slate-300 mb-5"
                >
                  <div className="mr-5 ">
                    <IconePlantao />
                  </div>
                  Plantão
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center lg:text-sm lg:leading-6 text-xl font-medium text-slate-700 hover:text-green-500 dark:text-gray-200 dark:hover:text-slate-300 mb-5"
                >
                  <div className="mr-5 ">
                    <IconeFarmacia />
                  </div>
                  Farmácias
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center lg:text-sm lg:leading-6 text-xl font-medium text-slate-700 hover:text-green-500 dark:text-gray-200 dark:hover:text-slate-300 mb-5"
                >
                  <div className="mr-5 ">
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
