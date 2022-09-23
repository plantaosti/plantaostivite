import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { SpinnerGap } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useGetPostBySlugQuery } from "../../graphql/generated";

export function PgNoticia() {
  const { slug } = useParams<{ slug: string }>();
  const { data, loading } = useGetPostBySlugQuery({
    variables: {
      slug,
    },
  });
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
              { name: "Notícias", href: "/noticias" },
              { name: `${data?.post?.title.slice(0,30)} ...`, href: `/noticia/${slug}` },
            ]}
          />
          <div className="flex flex-col gap-7 max-w-5xl m-auto py-6">
            <div>
              <img
                className="w-screen h-[calc(100vh_/_4)] object-cover m-auto rounded-md"
                src={`${data?.post?.thumbnail.url}`}
                alt={data?.post?.title}
              />
            </div>
            <div>
              <h4 className="text-xl text-gray-400 font-bold mb-6">
                {data?.post?.title}
              </h4>
              <div className="flex flex-col gap-5 text-gray-400">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${data?.post?.content?.html}`,
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-green-600">Por: {data?.post?.author?.name}</span>
              <span className="text-gray-500">
                Publicado:{" "}
                {format(parseISO(data?.post?.publishedAt), "dd/MM/yy", {
                  locale: ptBR,
                })}
              </span>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
