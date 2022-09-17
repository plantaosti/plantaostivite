import { FacebookLogo, InstagramLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <>
      <footer className="flex flex-col w-full bg-gray-100 text-center pt-8">
        <div className="flex flex-row gap-2 justify-center mb-6">
          <Link to="/" className="flex items-center gap-2 group ">
            <Logo  className="w-[1.5rem] fill-gray-700 dark:fill-gray-400 group-hover:fill-gray-400 transition-all duration-300"  />
            <span className="text-2xl text-gray-700 group-hover:text-gray-400 transition-all duration-300">Plantão STI.</span>
          </Link>
        </div>
        <div className="p-6 grid grid-cols-2 md:grid-cols-4 max-w-5xl md:m-auto gap-5">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-left text-black-200 lg:text-xl  dark:text-gray-600">
              Site
            </h3>
            <ul className="text-left">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black-200 transition-all duration-300"
                >
                  Plantão
                </a>
              </li>
              <li>
                <Link
                  to="/plantoes"
                  className="text-gray-700 hover:text-black-200 transition-all duration-300"
                >
                  Plantões
                </Link>
              </li>
              <li>
                <Link
                  to="/farmacias"
                  className="text-gray-700 hover:text-black-200 transition-all duration-300"
                >
                  Farmácias
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black-200 transition-all duration-300"
                >
                  Produtos
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-left text-black-200 lg:text-xl  dark:text-gray-600">
              Contato
            </h3>
            <ul className="text-left">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black-200 transition-all duration-300"
                >
                  Quem Apoia
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black-200 transition-all duration-300"
                >
                  Politicas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black-200 transition-all duration-300"
                >
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-left text-black-200 lg:text-xl  dark:text-gray-600">
              Mais informações
            </h3>
            <ul className="text-left text-gray-700">
              <li>Santa Terezinha de Itaipu</li>
              <li>85875-000</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-left text-black-200 lg:text-xl  dark:text-gray-600">
              Social
            </h3>
            <ul className="flex">
              <li>
                <a
                  href="https://www.instagram.com/plantaosti"
                  className="text-gray-700 hover:text-black-200 transition-all duration-300"
                >
                  <InstagramLogo size={32} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/plantaosti"
                  className="text-gray-700 hover:text-black-200 transition-all duration-300"
                >
                  <FacebookLogo size={32} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-6">
          <p className="text-sm text-black-200">
            Copyright by Plantao Sti. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
