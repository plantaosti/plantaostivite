import { Apoiadores } from "../components/Apoiadores";
import { Farmacia } from "../components/Farmacia";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Newsletter } from "../components/News";
import { Produto } from "../components/Produto";
import { Produtos } from "../components/Produtos";
import { Slide } from "../components/Slide";
import { Tutoriais } from "../components/Tutoriais";

export function Home() {
  return (
    <>
      <Header />
      <main className="mt-20 w-full  antialiased dark:bg-gray-200">
        <Slide />
        <Farmacia />
        <Apoiadores />
        <Tutoriais />
        <Newsletter />
        <Produto />
        <Footer />
      </main>
    </>
  );
}
