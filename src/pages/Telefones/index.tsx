import { Helmet } from "react-helmet";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Phone } from "phosphor-react";
import { Link } from "react-router-dom";
import { useGetTelefoneCategoriaAllQuery } from "../../graphql/generated";

export function PgTelefonesUteis() {
  const { data, loading, error } = useGetTelefoneCategoriaAllQuery();
  if (loading) {
    return (
      <>
        <Header />
        <main className="mt-20 w-full antialiased dark:bg-gray-200">
          <Footer />
        </main>
      </>
    );
  }
  return (
    <>
      <Helmet>
        <title>Farmácias | Santa Terezinha de Itaipu</title>
        <meta
          name="description"
          content="Confira a lista dos telefones úteis de Santa Terezinha de Itaipu - Paraná"
        />
        <meta
          name="keywords"
          content="Telefones úteis, Lista telefonica, utilidade publica, novos números de telefone"
        />
      </Helmet>
      <Header />
      <main className="mt-20 w-full antialiased dark:bg-gray-200">
        <section className="max-w-full flex-col m-auto p-6">
          <Breadcrumbs
            breadcrumbs={[
              { name: "Home", href: "/" },
              { name: "Telefones úteis", href: "/telefones-uteis" },
            ]}
          />
          <div className="flex max-w-5xl m-auto pb-5 justify-center">
            <h3 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
              Telefones úteis
            </h3>
          </div>
          <div className="hidden justify-center">
            <div className="flex gap-3 ">
              <form action="">
                <div className="flex flex-1 px-6 bg-slate-400">
                  <select
                    title="Selecione o bairro desejado"
                    name="bairro"
                    id=""
                    className="flex flex-1 bg-slate-400 py-2 text-white outline-none"
                  >
                    <option>Filtrar</option>
                    <option value="centro">Assistência Social</option>
                    <option value="centro">Saúde</option>
                    <option value="centro">Obras e serviços públicos</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col max-w-5xl m-auto py-4">
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4">
              {data?.telefoneCategorias.map((categoria) => {
                return (
                  <li key={categoria.id}>
                    <div>
                      <h4 className="text-sm md:text-lg text-green-600 font-semibold pb-2">
                        {categoria.name}
                      </h4>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {categoria.telefoneUtil.map((telefoneItem) => {
                        return (
                          <li className="flex flex-col w-full bg-slate-100 p-4 group-hover:bg-red-200">
                            <h3 className="mb-2 text-gray-500 text-left font-semibold">{telefoneItem.descricao}</h3>
                            <ul className="group flex flex-col gap-3 w-full">
                              {telefoneItem.telefones.map((telefone) => {
                                return (
                                  <li className="w-full">
                                    <a className="group flex w-full gap-2 py-2 text-green-600" href={telefone.linkPhone} title={`Clique aqui para falar direto com ${telefoneItem.descricao}`}>
                                      <Phone size={24} />
                                      {telefone.numero}
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                        );
                      })}
                    </ul>
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
