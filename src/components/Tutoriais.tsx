import { Eye } from "phosphor-react";

export function Tutoriais() {
  return (
    <>
      <section className="max-w-full flex-col m-auto pt-6 px-4">
        <div className="flex max-w-5xl m-auto pb-5 justify-center">
          <h3 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
            Tutoriais
          </h3>
        </div>
        <div className="flex flex-col max-w-5xl m-auto py-6">
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
            <li>
              <a
                href="#"
                className="flex flex-col gap-4 justify-center p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
              >
                <img
                  className="max-w-[200px] max-h-[200px] m-auto"
                  src="https://support.apple.com/library/content/dam/edam/applecare/images/pt_BR/iOS/ios15-4-iphone12-pro-move-from-android-hero.png"
                  alt=""
                />
                <div>
                  <h4 className="text-lg text-gray-600 font-semibold">
                    Migrar do Android para iOS
                  </h4>
                  <div className="flex gap-4 items-center text-gray-400">
                    <p className="text-sm truncate">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum quibusdam recusandae praesentium quidem officiis! Non
                      officiis, cumque quos aperiam illum consequuntur alias,
                      ipsum assumenda quibusdam perferendis quod soluta quam
                      corrupti!
                    </p>
                    <div className="flex flex-col items-center w-[60px]">
                      <Eye size={24} />
                      23
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-col gap-4 justify-center p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
              >
                <img
                  className="max-w-[200px] max-h-[200px] m-auto"
                  src="https://www.apple.com/v/apple-pay/o/images/overview/hardware__dm9gurdgkw02_large_2x.png"
                  alt=""
                />
                <div>
                  <h4 className="text-lg text-gray-600 font-semibold">
                    Configurar Apple Pay
                  </h4>
                  <div className="flex gap-4 items-center text-gray-400">
                    <p className="text-sm truncate">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum quibusdam recusandae praesentium quidem officiis! Non
                      officiis, cumque quos aperiam illum consequuntur alias,
                      ipsum assumenda quibusdam perferendis quod soluta quam
                      corrupti!
                    </p>
                    <div className="flex flex-col items-center w-[60px]">
                      <Eye size={24} />
                      20004
                    </div>
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
