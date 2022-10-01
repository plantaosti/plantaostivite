import { format } from "date-fns";
import { SpinnerGap } from "phosphor-react";
import { Apoiadores } from "../components/Apoiadores";
import { Farmacias } from "../components/Farmacias";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Newsletter } from "../components/News";
import { Noticias } from "../components/Noticias";
import { Produto } from "../components/Produto";
import { Slide } from "../components/Slide";
import { useSuperHomeQuery } from "../graphql/generated";

export function Home() {
  const end = format(Date.now(), "yyyy-MM-dd'T'15:00:00+00:00");
  const { data, error, loading } = useSuperHomeQuery({
    variables: {
      end,
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
  if (error) {
    return (
      <div className="flex flex-col items-center p-6 mt-9">
        <div className="flex flex-col items-center gap-3">
          <SpinnerGap size={32} className="animate-spin text-green-600" />
          <p>{error.name}</p>
          <p>{error.message}</p>
        </div>
      </div>
    );
  }
  return (
    <>
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
