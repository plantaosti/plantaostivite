import { format } from "date-fns";
import {
  Calendar,
  CaretLeft,
  CaretRight,
  Heart,
  Phone,
  SpinnerGap,
} from "phosphor-react";
import { Apoiadores } from "../components/Apoiadores";
import { Farmacias } from "../components/Farmacias";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Newsletter } from "../components/News";
import { Noticias } from "../components/Noticias";
import { Produto } from "../components/Produto";
import { Slide } from "../components/Slide";
import { useSuperHomeQuery } from "../graphql/generated";
import { Helmet } from "react-helmet";
import { HomeFake } from "../components/HomeFake";

export function Home() {
  const end = format(Date.now(), "yyyy-MM-dd'T'15:00:00+00:00");
  const { data, error, loading } = useSuperHomeQuery({
    variables: {
      end,
    },
  });
  if (loading) {
    return (
      <>
        <Header />
        <main className="mt-20 w-full  antialiased dark:bg-gray-200 animate-pulse opacity-25">
          <Footer />
        </main>
      </>
    );
  }
  if (error) {
    return (
      <>
        <Header />
        <main className="mt-20 w-full  antialiased dark:bg-gray-200 animate-pulse opacity-25 bg-red-300/40">
          <div className="flex flex-col items-center p-6 mt-9">
            <div className="flex top-0 flex-col items-center gap-3">
              <SpinnerGap size={32} className="animate-spin text-green-600" />
              <p>{error.name}</p>
              <p>{error.message}</p>
            </div>
          </div>
          <HomeFake />
        </main>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="Farmácia de plantao, plantão em santa terezinha de itaipu, farmácias em santa terezinha de itaipu, farmácia aberta final de semana, farmácia de plantão hoje"
        />
        <meta
          name="description"
          content="Plantão STI | Ferramenta que Facilita a Vida na Hora de Saber qual a Farmácia Disponível e Aberta no Final de Semana em Santa Terezinha de Itaipu."
        />
      </Helmet>
      <Header />
      <main className="mt-20 w-full  antialiased dark:bg-gray-200">
        <Slide plantoes={data?.plantoes!} />
        <Farmacias farmacias={data?.farmacias!} />
        <Apoiadores apoiadores={data?.apoiadores!} />
        <Noticias posts={data?.posts!} />
        <Newsletter />
        <Produto />
        <Footer />
      </main>
    </>
  );
}
