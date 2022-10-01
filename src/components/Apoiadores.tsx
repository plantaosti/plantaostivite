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
    </section>
  );
}
