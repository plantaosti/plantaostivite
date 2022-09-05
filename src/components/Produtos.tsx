import { Eye } from "phosphor-react";

export function Produtos() {
  return (
    <>
      <section className="max-w-full flex-col m-auto px-6 py-12">
        <div className="flex max-w-5xl m-auto pb-5 justify-center">
          <h3 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
            Produtos que uso e recomendo
          </h3>
        </div>
        <div className="flex flex-col max-w-5xl m-auto py-6">
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
            <li>
              <a
                href="#"
                className="flex flex-col gap-4 justify-center p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
              >
                <div className="bg-white p-3">
                  <img
                    className="max-w-[200px] max-h-[200px] m-auto"
                    src="https://images.prismic.io/plantaosti/7f2e3238-66f3-4e30-afb0-37c6e07498cf_517sIu208oL._AC_SL1000_.jpg?auto=compress,format"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-lg text-gray-600 font-semibold">
                    Multifuncional HP Smart Tank 514 Tanque de Tinta
                  </h4>
                  <div className="flex gap-4 items-center text-gray-400 pt-4">
                    <p className="text-sm truncate">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum quibusdam recusandae praesentium quidem officiis! Non
                      officiis, cumque quos aperiam illum consequuntur alias,
                      ipsum assumenda quibusdam perferendis quod soluta quam
                      corrupti!
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-col gap-4 justify-center p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
              >
                <div className="bg-white p-3">
                  <img
                    className="max-w-[200px] max-h-[200px] m-auto"
                    src="https://images.prismic.io/plantaosti/b99a9d41-0c87-4e1e-a789-b8255826372c_Echo+Dot+%284%C2%AA+Gerac%CC%A7a%CC%83o%29-+Smart+Speaker+com+Alexa+-+Cor+Preta.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-lg text-gray-600 font-semibold">
                    Echo Dot (4ª Geração): Smart Speaker com Alexa - Cor Preta
                  </h4>
                  <div className="flex gap-4 items-center text-gray-400 pt-4">
                    <p className="text-sm truncate">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum quibusdam recusandae praesentium quidem officiis! Non
                      officiis, cumque quos aperiam illum consequuntur alias,
                      ipsum assumenda quibusdam perferendis quod soluta quam
                      corrupti!
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-col gap-4 justify-center p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
              >
                <div className="bg-white p-3">
                  <img
                    className="max-w-[200px] max-h-[200px] m-auto"
                    src="https://images.prismic.io/plantaosti/3574427a-5df6-42b7-8417-ed02d14c688a_steamer.jpeg"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-lg text-gray-600 font-semibold">
                    Steamer Vaporizador Profissional SR-9000 220V
                  </h4>
                  <div className="flex gap-4 items-center text-gray-400 pt-4">
                    <p className="text-sm truncate">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum quibusdam recusandae praesentium quidem officiis! Non
                      officiis, cumque quos aperiam illum consequuntur alias,
                      ipsum assumenda quibusdam perferendis quod soluta quam
                      corrupti!
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-col gap-4 justify-center p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
              >
                <div className="bg-white p-3">
                  <img
                    className="max-w-[200px] max-h-[200px] m-auto"
                    src="https://images.prismic.io/plantaosti/dfeea5b9-afe6-4456-bc41-37d9381bdfb6_SmartTvLG434K.jpeg"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-lg text-gray-600 font-semibold">
                    Smart Tv LG 43" 4K UHD 43UP7500 Wifi
                  </h4>
                  <div className="flex gap-4 items-center text-gray-400 pt-4">
                    <p className="text-sm truncate">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum quibusdam recusandae praesentium quidem officiis! Non
                      officiis, cumque quos aperiam illum consequuntur alias,
                      ipsum assumenda quibusdam perferendis quod soluta quam
                      corrupti!
                    </p>
                  </div>
                </div>
              </a>
            </li>

            <li className="flex">
              <div className="flex p-6 m-auto max-w-sm lg:max-w-5xl justify-center items-center">
                <a
                  href="#"
                  className="bg-green-600 px-8 py-4 flex justify-center text-white hover:bg-gray-400 transition-all duration-300 dark:bg-gray-600 dark:hover:bg-gray-400"
                >
                  Ver mais
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
