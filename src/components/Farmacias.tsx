import { Link } from "react-router-dom";
import { GetFarmaciasQuery } from "../graphql/generated";

export function Farmacias({ farmacias }: GetFarmaciasQuery) {
  if (!farmacias) {
    return (
      <section className="w-full flex-col px-4 py-6">
        <div className="flex justify-center max-w-[986px] m-auto pb-5">
          <h2 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
            Farmácias
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full flex-col px-4 py-6">
      <div className="flex justify-center max-w-[986px] m-auto pb-5">
        <h2 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
          Farmácias
        </h2>
      </div>
      <ul className="grid grid-cols-1 gap-4 md:gap-2 pt-8 md:grid-cols-3 max-w-5xl m-auto">
        {farmacias?.map((farmacia, i) => {
          return (
            <li key={i}>
              <Link
                to={`/farmacia/${farmacia.slug}`}
                title="Clique para mais detalhes!"
                className="p-3 flex gap-4 bg-slate-50 transition-all duration-200 hover:drop-shadow-lg"
              >
                <img
                  className="max-w-[90px] rounded-md"
                  src={`https://www.plantaosti.com.br/images/${farmacia.urllogo}`}
                  alt=""
                />
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold text-gray-500">
                    {farmacia.name}
                  </h3>
                  <span className="text-sm text-gray-400">
                    {farmacia.neighborhood}
                  </span>
                  <span className="text-sm text-gray-400">
                    {farmacia.phone}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
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
  );
}
