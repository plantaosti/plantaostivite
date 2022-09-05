import { FacebookLogo, InstagramLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <>
      <footer className="flex flex-col w-full bg-gray-300 text-center pt-8">
        <div className="flex flex-row gap-2 justify-center mb-6">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-2xl text-gray-600 ">Plantão STI.</span>
          </Link>
        </div>
        <div className="p-6 grid grid-cols-2 md:grid-cols-4 max-w-5xl md:m-auto gap-5">
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-left text-white lg:text-lg  dark:text-gray-600">
              Site
            </h3>
            <ul className="text-left">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 transition-all duration-300"
                >
                  Plantão
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 transition-all duration-300"
                >
                  Plantões
                </a>
              </li>
              <li>
                <Link
                  to="/farmacias"
                  className="hover:text-gray-200 transition-all duration-300"
                >
                  Farmácias
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 transition-all duration-300"
                >
                  Produtos
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-left text-white lg:text-lg  dark:text-gray-600">
              Contato
            </h3>
            <ul className="text-left">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 transition-all duration-300"
                >
                  Quem Apoia
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 transition-all duration-300"
                >
                  Politicas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-200 transition-all duration-300"
                >
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-left text-white lg:text-lg  dark:text-gray-600">
              Mais informações
            </h3>
            <ul className="text-left">
              <li>Santa Terezinha de Itaipu</li>
              <li>85875-000</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm text-left font-bold text-white lg:text-lg  dark:text-gray-600">
              Social
            </h3>
            <ul className="flex">
              <li>
                <a
                  href="https://www.instagram.com/plantaosti"
                  className="hover:text-gray-200 transition-all duration-300"
                >
                  <InstagramLogo size={32} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/plantaosti"
                  className="hover:text-gray-200 transition-all duration-300"
                >
                  <FacebookLogo size={32} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-6">
          <p className="text-sm text-gray-200">
            Copyright by Anderson Lopes. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
