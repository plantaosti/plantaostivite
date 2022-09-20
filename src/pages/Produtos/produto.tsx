import {
  Envelope,
  Flag,
  NavigationArrow,
  Phone,
  SpinnerGap,
  WhatsappLogo,
} from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useGetProdutoBySlugQuery } from "../../graphql/generated";

export function PgProduto() {
  const { slug } = useParams<{ slug: string }>();
  const { data, loading } = useGetProdutoBySlugQuery({
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
              { name: "Produtos", href: `/produtos` },
              { name: `${slug}`, href: `/produto/${slug}` },
            ]}
          />

          <div className="flex flex-col lg:flex-row gap-7 max-w-5xl m-auto py-6">
            <div>
              <img
                className="md:max-w-[450px] m-auto rounded-lg"
                src={data?.produto?.image.url}
                alt={data?.produto?.name}
              />
            </div>
            <div>
              <h4 className="text-xl text-gray-400 font-bold mb-6">
                {data?.produto?.name}
              </h4>
              <div className="flex flex-col gap-5 text-gray-400">
                {data?.produto?.description?.text}
                <hr />
                <div className="flex flex-col gap-5 text-gray-400">
                  <Link to={`${data?.produto?.urlstore}`}>Ver na loja</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
