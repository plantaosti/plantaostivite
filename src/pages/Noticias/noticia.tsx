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
              { name: `${data?.post?.title}`, href: `/noticia/${slug}` },
            ]}
          />
          <div className="flex flex-col lg:flex-row gap-7 max-w-5xl m-auto py-6">
            <div>
              <img
                className="md:max-w-[450px] m-auto rounded-md"
                src={`${data?.post?.thumbnail.url}`}
                alt={data?.post?.title}
              />
            </div>
            <div>
              <h4 className="text-xl text-gray-400 font-bold mb-6">
                {data?.post?.title}
              </h4>
              <div className="flex flex-col gap-5 text-gray-400"></div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
