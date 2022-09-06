import {
  Envelope,
  Flag,
  NavigationArrow,
  Phone,
  WhatsappLogo,
} from "phosphor-react";
import { useParams, Link } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
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
            <Breadcrumbs />

            <div className="flex flex-col lg:flex-row gap-7 max-w-5xl m-auto py-6">
              <div>
                <img
                  className="md:max-w-[450px] m-auto"
                  src="https://www.plantaosti.com.br/images/farmacia-coperfarma-wagner.jpg"
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-xl text-gray-400 font-bold mb-6">
                  Farmacia Clarifarma
                </h4>
                <div className="flex flex-col gap-5 text-gray-400">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis odio nobis hic exercitationem aliquam ducimus
                    commodi maiores aspernatur ad tenetur eaque ipsum tempore,
                    iusto distinctio dolore placeat voluptatum alias nisi!
                  </p>
                  <hr />
                  <div>
                    <ul className="flex flex-col gap-3 text-gray-400">
                      <li className="flex items-center gap-2">
                        <Phone size={24} />
                        45 35412990
                      </li>
                      <li className="flex items-center gap-2">
                        <WhatsappLogo size={24} /> 45 35412990
                      </li>
                      <li className="flex items-center gap-2">
                        <Envelope size={24} /> farmacia@farmacia.com
                      </li>
                      <li className="flex items-center gap-2">
                        <NavigationArrow size={24} />
                        Rua Primeiro de maio, 166
                      </li>
                      <li className="flex items-center gap-2">
                        <Flag size={24} />
                        Centro
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div>
                    <table>
                      <thead>
                        <th>
                          <td className="text-lg">Programas</td>
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Farmacias Popular</td>
                        </tr>
                        <tr>
                          <td>Vale Mais Saude</td>
                        </tr>
                        <tr>
                          <td>Vidalink</td>
                        </tr>
                        <tr>
                          <td>Pharmalink</td>
                        </tr>
                        <tr>
                          <td>Funcional Card</td>
                        </tr>
                        <tr>
                          <td>Pec Febrafar</td>
                        </tr>
                        <tr>
                          <td>Object Pro</td>
                        </tr>
                        <tr>
                          <td>MAP MasterFarma</td>
                        </tr>
                        <tr>
                          <td>Ellomais / Facillite</td>
                        </tr>
                        <tr>
                          <td>Orizon</td>
                        </tr>
                        <tr>
                          <td>Transaction Centre</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="max-w-full flex-col m-auto p-6">
            <Breadcrumbs />
            <div className="flex max-w-5xl m-auto pb-5 justify-center">
              <h3 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
                Farmácias
              </h3>
            </div>
            <div className="flex justify-center">
              <div className="flex gap-3 md:hidden">
                <form action="">
                  <div className="flex flex-1 px-6 bg-slate-400">
                    <select
                      name="bairro"
                      id=""
                      className="flex flex-1 bg-slate-400 py-2 text-white outline-none"
                    >
                      <option value="centro">Centro</option>
                      <option value="centro">Parque dos Estados</option>
                      <option value="centro">Santa Monica</option>
                    </select>
                  </div>
                </form>
              </div>
              <ul className="hidden md:flex gap-3">
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
                      <ul className="flex flex-col gap-3 text-gray-400">
                        <li>Bairro: Centro</li>
                        <li className="flex items-center gap-2 text-sm">
                          <WhatsappLogo size={20} /> 45 35412990
                        </li>
                      </ul>
                      <p className="text-sm md:text-lg">
                        <br />
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
