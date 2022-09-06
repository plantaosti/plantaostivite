import { Calendar, Phone } from "phosphor-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function PgPlantoes() {
  return (
    <>
      <Header />
      <main className="mt-20 w-full antialiased dark:bg-gray-200">
        <section className="max-w-full flex-col m-auto p-6">
          <Breadcrumbs />
          <div className="flex max-w-5xl m-auto pb-5 justify-center">
            <h3 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
              Plantões
            </h3>
          </div>
          <div className="flex flex-col max-w-5xl m-auto py-6">
            <ul className="flex gap-3">
              <li className="max-w-sm">
                <Link
                  to={"/farmacia/clarifarma"}
                  className="flex flex-col justify-center bg-slate-100 transition-all duration-200 rounded-lg"
                >
                  <img
                    src="https://www.plantaosti.com.br/images/farmacia-coperfarma-wagner.jpg"
                    alt=""
                  />
                  <div className="bg-white p-4">
                    <h3 className="text-gray-400 text-lg mb-3 md:text-xl lg:text-2xl font-bold">
                      Farmácia Coperfarma
                    </h3>
                    <div className="">
                      <span className="text-sm text-gray-500 flex gap-2 items-center mb-3">
                        <Phone size={20} />
                        45 3541-3230
                      </span>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                          <Calendar size={24} color="green" />
                          Inicio: 03/09/2022
                        </span>
                        <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                          <Calendar size={24} color="red" />
                          Fim: 10/09/2022
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="max-w-sm">
                <Link
                  to={"/farmacia/clarifarma"}
                  className="flex flex-col justify-center bg-slate-100 transition-all duration-200 hover:drop-shadow-lg rounded-lg"
                >
                  <img
                    src="https://www.plantaosti.com.br/images/farmacia-coperfarma-wagner.jpg"
                    alt=""
                  />
                  <div className="bg-white p-4">
                    <h3 className="text-gray-400 text-lg mb-3 md:text-xl lg:text-2xl font-bold">
                      Farmácia Coperfarma
                    </h3>
                    <div className="">
                      <span className="text-sm text-gray-500 flex gap-2 items-center mb-3">
                        <Phone size={20} />
                        45 3541-3230
                      </span>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                          <Calendar size={24} color="green" />
                          Inicio: 03/09/2022
                        </span>
                        <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                          <Calendar size={24} color="red" />
                          Fim: 10/09/2022
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="max-w-sm">
                <Link
                  to={"/farmacia/clarifarma"}
                  className="flex flex-col justify-center bg-slate-100 transition-all duration-200 hover:drop-shadow-lg rounded-lg"
                >
                  <img
                    src="https://www.plantaosti.com.br/images/farmacia-coperfarma-wagner.jpg"
                    alt=""
                  />
                  <div className="bg-white p-4">
                    <h3 className="text-gray-400 text-lg mb-3 md:text-xl lg:text-2xl font-bold">
                      Farmácia Coperfarma
                    </h3>
                    <div className="">
                      <span className="text-sm text-gray-500 flex gap-2 items-center mb-3">
                        <Phone size={20} />
                        45 3541-3230
                      </span>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                          <Calendar size={24} color="green" />
                          Inicio: 03/09/2022
                        </span>
                        <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                          <Calendar size={24} color="red" />
                          Fim: 10/09/2022
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col max-w-5xl m-auto py-6">
            <table>
              <thead className="p-4 bg-gray-300">
                <tr>
                  <th>Farmácia</th>
                  <th>Bairro</th>
                  <th>Inicio</th>
                  <th>Fim</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100 text-center">
                  <td>Lopsfarma</td>
                  <td>Centro</td>
                  <td>23/09/2022</td>
                  <td>23/09/2022</td>
                </tr>
                <tr className="bg-gray-300 text-center">
                  <td>Lopsfarma</td>
                  <td>Centro</td>
                  <td>23/09/2022</td>
                  <td>23/09/2022</td>
                </tr>
                <tr className="bg-gray-100 text-center">
                  <td>Lopsfarma</td>
                  <td>Centro</td>
                  <td>23/09/2022</td>
                  <td>23/09/2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
