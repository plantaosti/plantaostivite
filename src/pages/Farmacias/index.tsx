import { Farmacia } from "../../components/Farmacia";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function PgFarmacia() {
  return (
    <>
      <Header />
      <main className="mt-20 w-full antialiased dark:bg-gray-200">
        <Farmacia />
        <Footer />
      </main>
    </>
  );
}
