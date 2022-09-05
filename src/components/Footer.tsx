import { FacebookLogo, InstagramLogo } from "phosphor-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <>
      <footer className="flex flex-col w-full bg-gray-300 text-center pt-8">
        <div className="grid grid-cols-5 max-w-5xl m-auto gap-4">
          <div className="flex flex-row gap-2">
            <a href="#" className="flex items-center gap-1">
              <Logo />
              <span className="text-2xl">Plantão STI.</span>
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm text-left font-bold text-white lg:text-lg  dark:text-gray-600">
              Social
            </h3>
            <ul className="flex">
              <li>
                <a href="https://www.instagram.com/plantaosti">
                  <InstagramLogo size={32} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/plantaosti">
                  <FacebookLogo size={32} />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-left text-white lg:text-lg  dark:text-gray-600">
              Site
            </h3>
            <ul className="text-left">
              <li>
                <a href="#">Plantão</a>
              </li>
              <li>
                <a href="#">Plantões</a>
              </li>
              <li>
                <a href="#">Farmácias</a>
              </li>
              <li>
                <a href="#">Produtos</a>
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
        </div>
        <div className="py-6">
          <p className="text-gray-200">
            Copyright by Anderson Lopes. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
