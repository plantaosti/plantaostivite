import { Eye, SpinnerGap } from "phosphor-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useGetPostsQueryQuery } from "../../graphql/generated";

export function PgNoticias() {
  const { data, loading, error } = useGetPostsQueryQuery();
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
  if (error) {
    return (
      <div className="flex flex-col items-center p-6 mt-6">
        <div className="flex flex-col items-center gap-3">
          <SpinnerGap size={32} className="animate-spin text-green-600" />
          <p className="animate-pulse text-sm text-green-600 font-bold">
            Erro: {error.name}
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>Notícias Plantão STI | Santa Terezinha de Itaipu</title>
        <meta
          name="description"
          content="Confira algumas das notícas mais relevantes do mundo da tecnlogia, farmácia, saude e segurança."
        />
        <meta
          name="keywords"
          content="Notícias, Farmácias, Farmácia de Plantão, Farmácia Clarifarma, Farmácia Coperfarma, Farmácia Preço Justo, Farmácia Santa Monica, Farmácia Medfarma"
        />
      </Helmet>
      <Header />
      <main className="mt-20 w-full antialiased dark:bg-gray-200">
        <section className="max-w-full flex-col m-auto p-6">
          <Breadcrumbs
            breadcrumbs={[
              { name: "Home", href: "/" },
              { name: "Notícias", href: "/noticias" },
            ]}
          />
          <div className="flex max-w-5xl m-auto pb-5 justify-center">
            <h3 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
              Notícias
            </h3>
          </div>
          <div className="flex flex-col max-w-5xl m-auto py-4">
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4">
              {data?.posts.map((post) => {
                return (
                  <li>
                    <Link
                      to={`/noticia/${post.slug}`}
                      title={post.title}
                      className="flex flex-col gap-2 md:gap-4 justify-center p-4 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                    >
                      <img src={post.thumbnail.url} alt={post.title} />
                      <h4>{post.title}</h4>
                      <div className="flex justify-between items-center">
                        <button className="bg-green-600 px-6 p-2 max-w-[200px] flex justify-center text-white hover:bg-gray-400 transition-all duration-300 dark:bg-gray-600 dark:hover:bg-gray-400">
                          Detalhes
                        </button>
                        <div className="flex flex-col gap-1 items-center w-[60px]">
                          <Eye size={24} />
                          <span className="text-sm">
                            {post.views ? post.views : ""}
                          </span>
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
