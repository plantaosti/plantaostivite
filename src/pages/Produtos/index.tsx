import { SpinnerGap } from "phosphor-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useGetProdutosQuery } from "../../graphql/generated";

export function PgProdutos() {
  const { data, loading } = useGetProdutosQuery();
  if (loading) {
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
          <Breadcrumbs
            breadcrumbs={[
              { name: "Home", href: "/" },
              { name: "Produtos", href: `/produtos` },
            ]}
          />
          <div className="flex max-w-5xl m-auto pb-5 justify-center">
            <h3 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
              Produtos
            </h3>
          </div>
          <div className="flex flex-col max-w-5xl m-auto py-6">
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
              {data?.produtos.map((produto) => {
                return (
                  <li key={produto.id}>
                    <Link
                      to={`/produto/${produto.slug}`}
                      className="flex flex-col gap-4 justify-center p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                    >
                      <div className="bg-white p-3 rounded-lg">
                        <img
                          className="max-w-[200px] max-h-[200px] m-auto rounded-lg"
                          src={`${produto.image.url}`}
                          alt=""
                        />
                      </div>
                      <div>
                        <h4 className="text-lg text-gray-600 font-semibold">
                          {produto.name}
                        </h4>
                        <div className="flex gap-4 items-center text-gray-400 pt-4">
                          <code className="text-sm truncate">
                            {produto.name}
                          </code>
                        </div>
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
