import { CurrencyDollar, Gear, List, Planet } from "phosphor-react";
import { Link } from "react-router-dom";

export function Produto() {
  return (
    <section className="flex justify-center py-10 m-auto w-full">
      <div className="flex flex-col md:px-4 md:flex-row max-w-sm md:max-w-5xl">
        <div className="">
          <h2 className="text-2xl font-bold text-green-500 mb-1">Produtos</h2>
          <p className="text-sm text-gray-400 mb-1">
            Produtos que eu uso e recomendo, dicas de uso e configurações.
          </p>

          <ul className="grid grid-cols-2 gap-4 my-4">
            <li className="text-left pb-4">
              <div className="before:content-[''] before:w-[33px] before:h-[33px] before:opacity-[0.2] before:left-[7px] before:bottom-[-5px] before:block before:absolute before:rounded-[50%] before:bg-green-500 relative mb-4">
                <Gear size={32} />
              </div>
              <h3 className="text-md text-green-500 font-bold mb-2">
                Configurações
              </h3>
              <p className="text-sm text-gray-400">
                Dicas de ajustes e configurações de aplicativos e produtos
              </p>
            </li>

            <li className="text-left pb-4">
              <div className="before:content-[''] before:w-[33px] before:h-[33px] before:opacity-[0.2] before:left-[7px] before:bottom-[-5px] before:block before:absolute before:rounded-[50%] before:bg-green-500 relative mb-4">
                <List size={32} />
              </div>
              <h3 className="text-md text-green-500 font-bold mb-2">
                Especificações
              </h3>
              <p className="text-sm text-gray-400">
                Lista de especificações do produto.
              </p>
            </li>

            <li className="text-left pb-4">
              <div className="before:content-[''] before:w-[33px] before:h-[33px] before:opacity-[0.2] before:left-[7px] before:bottom-[-5px] before:block before:absolute before:rounded-[50%] before:bg-green-500 relative mb-4">
                <CurrencyDollar size={32} />
              </div>
              <h3 className="text-md text-green-500 font-bold mb-2">Valores</h3>
              <p className="text-sm text-gray-400">
                Detalhes de preços e promoções.
              </p>
            </li>

            <li className="text-left pb-4">
              <div className="before:content-[''] before:w-[33px] before:h-[33px] before:opacity-[0.2] before:left-[7px] before:bottom-[-5px] before:block before:absolute before:rounded-[50%] before:bg-green-500 relative mb-4">
                <Planet size={32} />
              </div>
              <h3 className="text-md text-green-500 font-bold mb-2">Links</h3>
              <p className="text-sm text-gray-400">
                Links para comprar o produto direto nas lojas parceiras.
              </p>
            </li>
          </ul>
        </div>
        <div className="relative">
          <img
            className="rounded-lg w-[30rem]"
            src="/images/produtos-bg.jpg"
            alt="Imagen ilustrativa tema produtos indicados."
          />
          <Link
            title="Ver lista de produtos indicados."
            className="relative bottom-[4rem] left-[2rem] bg-green-600 px-8 py-4 text-white hover:bg-gray-400 transition-all duration-300 dark:bg-gray-600 dark:hover:bg-gray-400"
            to="/produtos"
          >
            Ver produtos
          </Link>
        </div>
      </div>
    </section>
  );
}
