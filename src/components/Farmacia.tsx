export function Farmacia() {
  return (
    <>
      <section className="w-full flex-col p-6 lg:p-8">
        <div className="flex justify-center max-w-[986px] m-auto mb-5">
          <h3 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
            Farmácias
          </h3>
        </div>
        <ul className="grid grid-cols-1 gap-4 md:gap-2 pt-8 md:grid-cols-3 max-w-5xl m-auto">
          <li>
            <a
              href="#"
              title="Clique para mais detalhes!"
              className="p-3 flex gap-4 bg-slate-50 transition-all duration-200 hover:drop-shadow-lg"
            >
              <img
                className="max-w-[90px]"
                src="https://www.plantaosti.com.br/images/farmacia-coperfarma-wagner.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-gray-500">
                  Coperfarma
                </h3>
                <span className="text-sm text-gray-400">Centro</span>
                <span className="text-sm text-gray-400">45 3541-3232</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-3 flex gap-4 bg-slate-50 transition-all duration-200 hover:drop-shadow-lg"
            >
              <img
                className="max-w-[90px]"
                src="https://www.plantaosti.com.br/images/farmacia-coperfarma-wagner.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-gray-500">
                  Coperfarma
                </h3>
                <span className="text-sm text-gray-400">Centro</span>
                <span className="text-sm text-gray-400">45 3541-3232</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-3 flex gap-4 bg-slate-50 transition-all duration-200 hover:drop-shadow-lg"
            >
              <img
                className="max-w-[90px]"
                src="https://www.plantaosti.com.br/images/farmacia-santa-monica.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-gray-500">
                  Santa Monica
                </h3>
                <span className="text-sm text-gray-400">Santa Monica</span>
                <span className="text-sm text-gray-400">45 3541-3232</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-3 flex gap-4 bg-slate-50 transition-all duration-200 hover:drop-shadow-lg"
            >
              <img
                className="max-w-[90px]"
                src="https://www.plantaosti.com.br/images/farmacia-clarifarma-centro.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-gray-500">
                  Clarifarma
                </h3>
                <span className="text-sm text-gray-400">Centro</span>
                <span className="text-sm text-gray-400">45 3541-3232</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-3 flex gap-4 bg-slate-50 transition-all duration-200 hover:drop-shadow-lg"
            >
              <img
                className="max-w-[90px]"
                src="https://www.plantaosti.com.br/images/farmacia-farma-center.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-gray-500">
                  Farma Center
                </h3>
                <span className="text-sm text-gray-400">Centro</span>
                <span className="text-sm text-gray-400">45 3541-3232</span>
              </div>
            </a>
          </li>
        </ul>
        <div className="flex p-6 m-auto max-w-sm lg:max-w-5xl justify-center">
          <a
            href="#"
            className="bg-green-600 px-8 py-4 flex justify-center text-white hover:bg-gray-400 transition-all duration-300 dark:bg-gray-600 dark:hover:bg-gray-400"
          >
            Ver todas
          </a>
        </div>
      </section>
    </>
  );
}
