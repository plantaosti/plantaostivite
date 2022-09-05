import { useParams, Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function PgFarmacia() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <>
      <Header />
      <main className="mt-20 w-full antialiased dark:bg-gray-200">
        {slug ? (
          <section className="max-w-full flex-col m-auto p-6">
            <div className="flex max-w-5xl m-auto pb-5 justify-center">
              <h3 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
                Farmácia Clarifarma
              </h3>
            </div>
            <div className="flex gap-4 max-w-5xl m-auto py-6">
              <div>
                <img
                  className="max-w-[130px] md:max-w-[200px] max-h-[200px] m-auto"
                  src="https://www.plantaosti.com.br/images/farmacia-coperfarma-wagner.jpg"
                  alt=""
                />
              </div>
              <div>
                <h4>Farmacia Clarifarma</h4>
                <div>
                  <span>Detales</span>
                  <ul>
                    <li>Endere</li>
                    <li>Farmaceutico</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="max-w-full flex-col m-auto p-6">
            <div className="flex max-w-5xl m-auto pb-5 justify-center">
              <h3 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
                Farmácias
              </h3>
            </div>
            <div className="flex justify-center">
              <ul className="flex gap-3">
                <li>
                  <button className="bg-gray-500 py-2 px-5 text-gray-100 text-sm">
                    Centro
                  </button>
                </li>
                <li>
                  <button className="bg-gray-500 py-2 px-5 text-gray-100 text-sm">
                    Parque dos Estados
                  </button>
                </li>
                <li>
                  <button className="bg-gray-500 py-2 px-5 text-gray-100 text-sm">
                    Santa Mônica
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col max-w-5xl m-auto py-6">
              <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
                <li>
                  <Link
                    to={"/farmacia/clarifarma"}
                    className="flex flex-col gap-2 md:gap-4 justify-center p-2 md:p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                  >
                    <img
                      className="max-w-[130px] md:max-w-[200px] max-h-[200px] m-auto"
                      src="https://www.plantaosti.com.br/images/farmacia-coperfarma-wagner.jpg"
                      alt=""
                    />
                    <div>
                      <h4 className="text-sm md:text-lg text-gray-600 font-semibold">
                        Coperfarma
                      </h4>
                      <p className="text-sm md:text-lg">
                        Bairro: Centro
                        <br />
                        Telefone: (45)3541-2901
                      </p>
                    </div>
                    <div className="flex mt-2 justify-center">
                      <button className="bg-gray-500 py-2 px-5 text-gray-100 text-sm">
                        Detalhes
                      </button>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/farmacia/clarifarma"}
                    className="flex flex-col gap-2 md:gap-4 justify-center p-2 md:p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                  >
                    <img
                      className="max-w-[130px] md:max-w-[200px] max-h-[200px] m-auto"
                      src="https://www.plantaosti.com.br/images/farmacia-coperfarma-wagner.jpg"
                      alt=""
                    />
                    <div>
                      <h4 className="text-sm md:text-lg text-gray-600 font-semibold">
                        Coperfarma
                      </h4>
                      <p className="text-sm md:text-lg">
                        Bairro: Centro
                        <br />
                        Telefone: (45)3541-2901
                      </p>
                    </div>
                    <div className="flex mt-2 justify-center">
                      <button className="bg-gray-500 py-2 px-5 text-gray-100 text-sm">
                        Detalhes
                      </button>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/farmacia/clarifarma"}
                    className="flex flex-col gap-2 md:gap-4 justify-center p-2 md:p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                  >
                    <img
                      className="max-w-[130px] md:max-w-[200px] max-h-[200px] m-auto"
                      src="https://www.plantaosti.com.br/images/farmacia-coperfarma-wagner.jpg"
                      alt=""
                    />
                    <div>
                      <h4 className="text-sm md:text-lg text-gray-600 font-semibold">
                        Coperfarma
                      </h4>
                      <p className="text-sm md:text-lg">
                        Bairro: Centro
                        <br />
                        Telefone: (45)3541-2901
                      </p>
                    </div>
                    <div className="flex mt-2 justify-center">
                      <button className="bg-gray-500 py-2 px-5 text-gray-100 text-sm">
                        Detalhes
                      </button>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/farmacia/clarifarma"}
                    className="flex flex-col gap-2 md:gap-4 justify-center p-2 md:p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                  >
                    <img
                      className="max-w-[130px] md:max-w-[200px] max-h-[200px] m-auto"
                      src="https://www.plantaosti.com.br/images/farmacia-coperfarma-wagner.jpg"
                      alt=""
                    />
                    <div>
                      <h4 className="text-sm md:text-lg text-gray-600 font-semibold">
                        Coperfarma
                      </h4>
                      <p className="text-sm md:text-lg">
                        Bairro: Centro
                        <br />
                        Telefone: (45)3541-2901
                      </p>
                    </div>
                    <div className="flex mt-2 justify-center">
                      <button className="bg-gray-500 py-2 px-5 text-gray-100 text-sm">
                        Detalhes
                      </button>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/farmacia/clarifarma"}
                    className="flex flex-col gap-2 md:gap-4 justify-center p-2 md:p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                  >
                    <img
                      className="max-w-[130px] md:max-w-[200px] max-h-[200px] m-auto"
                      src="https://www.plantaosti.com.br/images/farmacia-coperfarma-wagner.jpg"
                      alt=""
                    />
                    <div>
                      <h4 className="text-sm md:text-lg text-gray-600 font-semibold">
                        Coperfarma
                      </h4>
                      <p className="text-sm md:text-lg">
                        Bairro: Centro
                        <br />
                        Telefone: (45)3541-2901
                      </p>
                    </div>
                    <div className="flex mt-2 justify-center">
                      <button className="bg-gray-500 py-2 px-5 text-gray-100 text-sm">
                        Detalhes
                      </button>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/farmacia/clarifarma"}
                    className="flex flex-col gap-2 md:gap-4 justify-center p-2 md:p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                  >
                    <img
                      className="max-w-[130px] md:max-w-[200px] max-h-[200px] m-auto"
                      src="https://www.plantaosti.com.br/images/farmacia-coperfarma-wagner.jpg"
                      alt=""
                    />
                    <div>
                      <h4 className="text-sm md:text-lg text-gray-600 font-semibold">
                        Coperfarma
                      </h4>
                      <p className="text-sm md:text-lg">
                        Bairro: Centro
                        <br />
                        Telefone: (45)3541-2901
                      </p>
                    </div>
                    <div className="flex mt-2 justify-center">
                      <button className="bg-gray-500 py-2 px-5 text-gray-100 text-sm">
                        Detalhes
                      </button>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        )}
        <Footer />
      </main>
    </>
  );
}
