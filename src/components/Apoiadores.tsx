export function Apoiadores() {
  return (
    <section className="w-full flex-col py-8 px-4 bg-gray-100 dark:bg-gray-600">
      <div className="flex flex-col text-center justify-center max-w-4xl m-auto pb-5">
        <h3 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-100">
          Apoiadores
        </h3>
        <span className="text-sm py-2 text-gray-300 dark:text-gray-200">
          Pessoas e empresas que apoiam essa ferramenta.
        </span>
      </div>
      <ul className="grid grid-cols-2 gap-3  md:grid-cols-4 m-auto max-w-[986px] py-10 text-gray-500 dark:text-gray-200">
        <li>Thais Reis Nails</li>
        <li>Estação Store</li>
        <li>Aline Mezzari Brand</li>
        <li>Renato Smania</li>
        <li>Elaine Costa Smania</li>
        <li>Farmácias Clarifarma</li>
        <li>Farmácia Santa Mônica</li>
        <li>Farmácia Biofarma</li>
        <li>Fabiane Moda Fitness</li>
        <li>Negão Motos</li>
      </ul>
    </section>
  );
}
