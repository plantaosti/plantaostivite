import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { X, List, Phone, PhoneCall } from "phosphor-react";
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
      <header className="bg-white/90 backdrop-blur-sm flex justify-center shadow-md w-full fixed top-0 left-0 z-[90] h-20 antialiased dark:bg-gray-800/95">
        <nav className="flex justify-between w-5/6 max-w-5xl">
          <Link to="/" className="flex items-center group" tabIndex={1}>
            <Logo className="w-[1.5rem] fill-green-600 dark:fill-gray-300 group-hover:fill-gray-400" />
            <span className="text-xl tracking-tight ml-3 text-green-500 group-hover:text-gray-400 dark:text-gray-300">
              PLANTAO STI.
            </span>
          </Link>

          <div className="hidden lg:flex items-center">
            <div className="text-sm lg:flex-grow">
              <ul className="flex gap-6">
                <li className="after:content-[''] after:w-[0] after:cursor-pointer after:hover:w-[100%] after:transition-all after:duration-300 after:bg-gray-400 after:h-[4px] after:block dark:after:bg-gray-200">
                  <Link
                    to="/"
                    title="Link para acessar pagina de plantão"
                    aria-label="Link para acessar página de plantão"
                    className="block text-sm mt-4 lg:inline-block lg:mt-0 text-green-500 hover:text-gray-400 mr-4 lg:text-lg dark:text-gray-100 dark:hover:text-gray-200"
                  >
                    Plantão
                  </Link>
                </li>
                <li className="after:content-[''] after:w-[0] after:cursor-pointer after:hover:w-[100%] after:transition-all after:duration-300 after:bg-gray-400 after:h-[4px] after:block dark:after:bg-gray-200">
                  <Link
                    to="/plantoes"
                    title="Link para acessar página de plantões"
                    aria-label="Link para acessar página de plantões"
                    className="block text-sm mt-4 lg:inline-block lg:mt-0 text-green-500 hover:text-gray-400 mr-4 lg:text-lg dark:text-gray-100 dark:hover:text-gray-200"
                  >
                    Plantões
                  </Link>
                </li>
                <li className="after:content-[''] after:w-[0] after:cursor-pointer after:hover:w-[100%] after:transition-all after:duration-300 after:bg-gray-400 after:h-[4px] after:block dark:after:bg-gray-200">
                  <Link
                    to="/farmacias"
                    title="Link para acessar página de farmácias"
                    aria-label="Link para acessar página de farmácias"
                    className="block text-sm mt-4 lg:inline-block lg:mt-0 text-green-500 hover:text-gray-400 mr-4 lg:text-lg dark:text-gray-100 dark:hover:text-gray-200"
                  >
                    Farmácias
                  </Link>
                </li>
                <li className="after:content-[''] after:w-[0] after:cursor-pointer after:hover:w-[100%] after:transition-all after:duration-300 after:bg-gray-400 after:h-[4px] after:block dark:after:bg-gray-200">
                  <Link
                    to="/produtos"
                    title="Link para acessar página de produtos"
                    aria-label="Link para acessar página de produtos"
                    className="block text-sm mt-4 lg:inline-block lg:mt-0 text-green-500 hover:text-gray-400 mr-4 lg:text-lg dark:text-gray-100 dark:hover:text-gray-200"
                  >
                    Produtos
                  </Link>
                </li>
                <li className="after:content-[''] after:w-[0] after:cursor-pointer after:hover:w-[100%] after:transition-all after:duration-300 after:bg-gray-400 after:h-[4px] after:block dark:after:bg-gray-200">
                  <Link
                    to="/telefones-uteis"
                    title="Link para acessar página de produtos"
                    aria-label="Link para acessar página de produtos"
                    className="block text-sm mt-4 lg:inline-block lg:mt-0 text-green-500 hover:text-gray-400 mr-4 lg:text-lg dark:text-gray-100 dark:hover:text-gray-200"
                  >
                    Telefones úteis
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center">
            <button
              className="lg:hidden dark:text-gray-200"
              onClick={() => setOpen(!open)}
              title="Botão para acessar menu mobile"
              aria-label="Botão para acessar menu mobile"
              tabIndex={2}
            >
              <List
                size={32}
                className="text-green-600 dark:text-gray-200 dark:hover:text-gray-500"
              />
            </button>
          </div>
        </nav>
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
        <div className="relative bg-white w-80 max-w-[100%-3rem]  h-full p-7 dark:bg-gray-800 shadow shadow-lg shadow-gray-200">
          <button
            className="absolute z-50 top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-green-500 dark:text-slate-300"
            onClick={() => setOpen(!open)}
            title="Botão para fechar menu mobile"
            aria-label="Botão para fechar menu mobile"
          >
            <span className="sr-only">Fechar Menu</span>
            <X size={32} className="dark:hover:text-gray-500" />
          </button>
          <nav className="lg:text-sm lg:leading-6 relative">
            <ul className="flex flex-col gap-6 justify-center mt-6">
              <li>
                <Link
                  to="/"
                  title="Link para acessar pagina de plantão"
                  aria-label="Link para acessar página de plantão"
                  className="group flex items-center lg:text-sm lg:leading-6 text-xl font-medium text-green-500 hover:text-gray-400 dark:text-gray-200 dark:hover:text-gray-500"
                >
                  <div className="mr-6">
                    <IconePlantao className="h-8 w-8 fill-green-500 group-hover:fill-gray-400 dark:fill-gray-200  dark:group-hover:fill-gray-500" />
                  </div>
                  Plantão
                </Link>
              </li>
              <li>
                <Link
                  to="/plantoes"
                  title="Link para acessar página de plantões"
                  aria-label="Link para acessar página de plantões"
                  className="group flex items-center lg:text-sm lg:leading-6 text-xl font-medium text-green-500 hover:text-gray-400 dark:text-gray-200 dark:hover:text-gray-500 group"
                >
                  <div className="mr-6">
                    <IconePlantoes className="h-8 w-8 fill-green-500 group-hover:fill-gray-400 dark:fill-gray-200  dark:group-hover:fill-gray-500" />
                  </div>
                  Plantões
                </Link>
              </li>
              <li>
                <Link
                  to="/farmacias"
                  title="Link para acessar página de plantões"
                  aria-label="Link para acessar página de plantões"
                  className="group flex items-center lg:text-sm lg:leading-6 text-xl font-medium text-green-500 hover:text-gray-400 dark:text-gray-200 dark:hover:text-gray-500"
                >
                  <div className="mr-6">
                    <IconeFarmacia className="h-8 w-8 fill-green-500 group-hover:fill-gray-400 dark:fill-gray-200  dark:group-hover:fill-gray-500" />
                  </div>
                  Farmácias
                </Link>
              </li>
              <li>
                <Link
                  to="/produtos"
                  title="Link para acessar página de produtos"
                  aria-label="Link para acessar página de produtos"
                  className="group flex items-center lg:text-sm lg:leading-6 text-xl font-medium text-green-500 hover:text-gray-400 dark:text-gray-200 dark:hover:text-gray-500"
                >
                  <div className="mr-6">
                    <IconeProdutos className="h-8 w-8 fill-green-500 group-hover:fill-gray-400 dark:fill-gray-200  dark:group-hover:fill-gray-500" />
                  </div>
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  to="/telefones-uteis"
                  title="Link para acessar página de produtos"
                  aria-label="Link para acessar página de produtos"
                  className="group flex items-center lg:text-sm lg:leading-6 text-xl font-medium text-green-500 hover:text-gray-400 dark:text-gray-200 dark:hover:text-gray-500"
                >
                  <div className="mr-6">
                    <PhoneCall size={32} weight="light" className="fill-green-500 group-hover:fill-gray-400 dark:fill-gray-200  dark:group-hover:fill-gray-500" />
                  </div>
                  Telefones úteis
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
