import { Flag, Phone, SpinnerGap } from "phosphor-react";
import { useParams, Link } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useGetFarmaciasAllQuery } from "../../graphql/generated";

export function PgFarmacias() {
  const { parametro } = useParams();
  const { data } = useGetFarmaciasAllQuery();
  console.log(parametro);
  if (!data) {
    return (
      <div className="flex flex-col items-center p-6 mt-6">
        <div className="flex flex-col items-center gap-3">
          <SpinnerGap size={32} className="animate-spin text-green-600" />
          <p className="animate-pulse text-sm text-green-600 font-bold">
            Carregando ...
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <Header />
      <main className="mt-20 w-full antialiased dark:bg-gray-200">
        <section className="max-w-full flex-col m-auto p-6">
          <Breadcrumbs enderecos={["farmacias"]} />
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
          <div className="flex flex-col max-w-5xl m-auto py-4">
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4">
              {data?.farmacias.map((farmacia) => {
                return (
                  <li key={farmacia.id}>
                    <Link
                      to={`/farmacia/${farmacia.slug}`}
                      className="flex flex-col gap-2 md:gap-4 justify-center p-4 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                    >
                      <img
                        className="m-auto rounded-md"
                        src={`https://www.plantaosti.com.br/images/${farmacia.urllogo}`}
                        alt=""
                      />
                      <div>
                        <h4 className="text-sm md:text-lg text-gray-600 font-semibold pb-2">
                          {farmacia.name}
                        </h4>
                        <ul className="flex flex-col gap-1 text-gray-400">
                          <li className="flex items-center gap-2 text-sm">
                            <Flag size={20} />
                            {farmacia.neighborhood}
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <Phone size={20} />
                            {farmacia.phone}
                          </li>
                        </ul>
                      </div>
                      <div className="flex mx-4 md:mx-2 justify-center">
                        <button className="bg-gray-500 py-2 px-5 text-gray-100 text-sm">
                          Detalhes
                        </button>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
