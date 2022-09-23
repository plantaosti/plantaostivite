import { Apoiadores } from "../components/Apoiadores";
import { Farmacias } from "../components/Farmacias";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Newsletter } from "../components/News";
import { Noticias } from "../components/Noticias";
import { Produto } from "../components/Produto";
import { Slide } from "../components/Slide";

export function Home() {
  return (
    <>
      <Header />
      <main className="mt-20 w-full  antialiased dark:bg-gray-200">
        <Slide />
        <Farmacias />
        <Apoiadores />
        <Noticias />
        <Newsletter />
        <Produto />
        <Footer />
      </main>
    </>
  );
}
