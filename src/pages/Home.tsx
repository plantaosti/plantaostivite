import { Farmacia } from "../components/Farmacia";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Newsletter } from "../components/News";
import { Produtos } from "../components/Produtos";
import { Slide } from "../components/Slide";
import { Tutoriais } from "../components/Tutoriais";

function Home() {
  return (
    <>
      <Header />
      <main className="mt-20 w-full  antialiased dark:bg-gray-200">
        <Slide />
        <Farmacia />
        <Tutoriais />
        <Newsletter />
        <Produtos />
        <Footer />
      </main>
    </>
  );
}

export default Home;
