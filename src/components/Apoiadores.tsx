import { MusicNotes } from "phosphor-react";
import { GetApoiadoresQueryQuery } from "../graphql/generated";

export function Apoiadores({ apoiadores }: GetApoiadoresQueryQuery) {
  if (!apoiadores) {
    return (
      <section
        className="w-full flex-col py-8 px-4 bg-gray-100 dark:bg-gray-600"
        id="apoiadores"
      >
        <div className="flex flex-col text-center justify-center max-w-4xl m-auto pb-5">
          <h2 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-100">
            Apoiadores
          </h2>
          <span className="text-sm py-2 text-gray-300 dark:text-gray-200">
            Pessoas e empresas que apoiam essa ferramenta.
          </span>
        </div>
      </section>
    );
  }
  return (
    <section
      className="w-full h-full flex-col py-8 px-4 bg-gray-100 dark:bg-gray-600"
      id="apoiadores"
    >
      <div>
        <div className="flex flex-col text-center justify-center max-w-4xl m-auto pb-5">
          <h2 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-100">
            Apoiadores
          </h2>
          <span className="text-sm py-2 text-gray-300 dark:text-gray-200">
            Pessoas e empresas que apoiam essa ferramenta.
          </span>
        </div>
        <ul className="grid grid-cols-2 gap-3  md:grid-cols-4 m-auto max-w-[986px] py-10 text-gray-500 dark:text-gray-200">
          {apoiadores?.map((apoiador) => {
            return (
              <li key={apoiador.id}>
                {apoiador?.url ? (
                  <a
                    className="hover:text-green-600 transition-all duration-300"
                    href={`${apoiador.url}`}
                    title={`${apoiador.name}`}
                  >
                    {apoiador.name}
                  </a>
                ) : (
                  `${apoiador.name}`
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col items-center w-full">
          <div className="">
            <img
              className="w-full h-60 object-cover rounded-md"
              src="https://media.graphassets.com/lAU7qLfmSUGC2LB6OmkC"
              alt="Banner imagem radio cidade verao"
            />
          </div>
          <div className="flex justify-center mt-4">
            <a
              href="https://p.stmip.net/tobjbrfj/vplay.html"
              target="_blank"
              title="Rádio Cidade Verão"
              rel="noopener"
              className="bg-green-600 gap-4 items-center px-8 py-4 flex justify-center text-white hover:bg-gray-400 transition-all duration-300 dark:bg-gray-600 dark:hover:bg-gray-400"
            >
              <MusicNotes size={32} />
              <div className="flex gap-2 items-center">
                Ouça agora <span className="font-bold">RADIO AO VIVO</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
