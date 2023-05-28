import { Calendar, CaretLeft, CaretRight, Phone } from "phosphor-react";
import { Link } from "react-router-dom";

export function HomeFake() {
  return (
    <>
      <section className="w-full flex-col bg-gray-100 dark:bg-gray-300 mt-9 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[980px] m-auto">
          <div className=" my-6 mx-4 md:order-2 drop-shadow-xl">
            <div className="max-w-[calc(100vw - 12rem)]">
              <img
                className="rounded-t-lg"
                src="/images/default_geocode-2x.png"
                alt="Imagem de loading, aguardando todo o conteudo carregar na tela"
              />
              <div className="bg-white p-4 rounded-b-lg">
                <h3 className="text-gray-400 text-lg mb-3 md:text-xl lg:text-2xl font-bold">
                  Nome da farmacia
                </h3>
                <div className="">
                  <p className="text-sm text-gray-500 flex gap-2 items-center mb-3">
                    Bairro | Endereço
                  </p>
                  <p className="text-sm text-gray-500 flex gap-2 items-center mb-3">
                    <Phone size={20} />
                    Telefone
                  </p>
                  <div className="flex justify-between ">
                    <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                      <Calendar size={24} color="green" />
                      25/11/1988
                    </span>
                    <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                      <Calendar size={24} color="red" />
                      25/11/1988
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-button-prev text-white after:content-['']">
              <CaretLeft className="text-2xl lg:text-4xl" />
            </div>
            <div className="swiper-button-next text-white after:content-['']">
              <CaretRight className="text-2xl lg:text-4xl" />
            </div>
          </div>
          <div className="p-6 flex flex-col gap-5 justify-center align-middle order-1 md:max-w-sm lg:max-w-md">
            <h1 className="text-xl lg:text-5xl font-bold text-gray-400 dark:text-gray-100">
              Farmácia de Plantão
            </h1>
            <p className="text-sm text-gray-400 lg:text-lg dark:text-gray-50">
              Confira a lista atualizada dos plantões para este mês.
            </p>
            <Link
              to="/plantoes"
              title="Lista completa das farmácias de plantão."
              aria-label="Link para acessar a página com a lista de plantões"
              className="bg-green-600 p-4 max-w-[200px] flex justify-center text-white hover:bg-gray-400 transition-all duration-300 dark:bg-gray-600 dark:hover:bg-gray-400"
            >
              Lista completa
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full flex-col px-4 py-6">
        <div className="flex justify-center max-w-[986px] m-auto pb-5">
          <h2 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
            Farmácias
          </h2>
        </div>
        <ul className="grid grid-cols-1 gap-4 md:gap-2 pt-8 md:grid-cols-3 max-w-5xl m-auto">
          <li>
            <div className="p-3 flex gap-4 bg-slate-50 rounded-md transition-all duration-200 hover:drop-shadow-lg">
              <img
                className="max-w-[90px] rounded-md"
                width={90}
                height={60}
                src="/images/default_geocode-2x.png"
                alt=""
              />
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-gray-500">
                  Nome da Farmacia
                </h3>
                <span className="text-sm text-gray-400">Bairro</span>
                <span className="text-sm text-gray-400">Telefone</span>
              </div>
            </div>
          </li>
          <li>
            <div className="p-3 flex gap-4 bg-slate-50 rounded-md transition-all duration-200 hover:drop-shadow-lg">
              <img
                className="max-w-[90px] rounded-md"
                width={90}
                height={60}
                src="/images/default_geocode-2x.png"
                alt=""
              />
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-gray-500">
                  Nome da Farmacia
                </h3>
                <span className="text-sm text-gray-400">Bairro</span>
                <span className="text-sm text-gray-400">Telefone</span>
              </div>
            </div>
          </li>
          <li className="flex justify-center items-center">
            <div className="p-6 m-auto max-w-sm lg:max-w-5xl justify-center">
              <Link
                to="/farmacias"
                className="bg-green-600 px-8 py-4 flex justify-center text-white hover:bg-gray-400 transition-all duration-300 dark:bg-gray-600 dark:hover:bg-gray-400"
              >
                Ver todas
              </Link>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
