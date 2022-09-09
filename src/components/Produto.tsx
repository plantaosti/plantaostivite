import { CurrencyDollar, Gear, List, Planet } from "phosphor-react";

export function Produto() {
  return (
    <section className="flex justify-center py-6 m-auto w-full">
      <div className="flex flex-col p-4 max-w-sm md:max-w-5xl">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-green-500 mb-1">Produtos</h2>
          <p className="text-sm text-gray-400 mb-1">
            Produtos que eu uso e recomendo, dicas de uso e configurações.
          </p>

          <ul className="grid grid-cols-2 my-4">
            <li className="text-left pb-4 w-[50%]">
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

            <li className="text-left pb-4 w-[50%]">
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

            <li className="text-left pb-4 w-[50%]">
              <div className="before:content-[''] before:w-[33px] before:h-[33px] before:opacity-[0.2] before:left-[7px] before:bottom-[-5px] before:block before:absolute before:rounded-[50%] before:bg-green-500 relative mb-4">
                <CurrencyDollar size={32} />
              </div>
              <h3 className="text-md text-green-500 font-bold mb-2">Valores</h3>
              <p className="text-sm text-gray-400">
                Detalhes de preços e promoções.
              </p>
            </li>

            <li className="text-left pb-4 w-[50%]">
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
        <div className="">
          <div className="w-sm p-4">
            <div className="flex justify-center">
              <img
                className="max-w-sm"
                src="https://images.prismic.io/plantaosti/dfeea5b9-afe6-4456-bc41-37d9381bdfb6_SmartTvLG434K.jpeg"
                alt=""
              />
            </div>
            <h3 className="text-lg text-gray-400 font-bold mb-3">
              Multifuncional HP Smart Tank 514 Tanque de Tinta
            </h3>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              non labore quam laboriosam illum nisi odio nam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
