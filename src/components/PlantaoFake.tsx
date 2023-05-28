import { Calendar, CaretLeft, CaretRight, Phone } from "phosphor-react";
import { Breadcrumbs } from "./Breadcrumbs";

export function PlantaoFake() {
  return (
    <section className="max-w-full flex-col m-auto p-6">
      <Breadcrumbs
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Plantões", href: "/plantoes" },
        ]}
      />
      <div className="flex max-w-5xl m-auto pb-5 justify-center">
        <h3 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-400">
          Plantões
        </h3>
      </div>
      <div className="flex m-auto max-w-sm md:max-w-full lg:max-w-5xl">
        <div className="flex">
          <ul className="flex gap-3">
            <li className="flex flex-col justify-center bg-slate-100 transition-all duration-200 rounded-lg">
              <img
                className="rounded-lg"
                src="/images/default_geocode-2x.png"
                alt="Imagem padrão para loading"
              />
              <div className="bg-white p-4">
                <h3 className="text-gray-400 text-lg mb-3 md:text-xl lg:text-2xl font-bold">
                  Nome da farmacia
                </h3>
                <div className="">
                  <span className="text-sm text-gray-500 flex gap-2 items-center mb-3">
                    <Phone size={20} />
                    Telefone
                  </span>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                      <Calendar size={24} color="green" />
                      25/11/1988
                    </span>
                    <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                      <Calendar size={24} color="red" />
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li className="md:flex flex-col hidden justify-center bg-slate-100 transition-all duration-200 rounded-lg">
              <img
                className="rounded-lg"
                src="/images/default_geocode-2x.png"
                alt="Imagem padrão para loading"
              />
              <div className="bg-white p-4">
                <h3 className="text-gray-400 text-lg mb-3 md:text-xl lg:text-2xl font-bold">
                  Nome da farmacia
                </h3>
                <div className="">
                  <span className="text-sm text-gray-500 flex gap-2 items-center mb-3">
                    <Phone size={20} />
                    Telefone
                  </span>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                      <Calendar size={24} color="green" />
                      25/11/1988
                    </span>
                    <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                      <Calendar size={24} color="red" />
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex-col hidden md:flex justify-center bg-slate-100 transition-all duration-200 rounded-lg">
              <img
                className="rounded-lg"
                src="/images/default_geocode-2x.png"
                alt="Imagem padrão para loading"
              />
              <div className="bg-white p-4">
                <h3 className="text-gray-400 text-lg mb-3 md:text-xl lg:text-2xl font-bold">
                  Nome da farmacia
                </h3>
                <div className="">
                  <span className="text-sm text-gray-500 flex gap-2 items-center mb-3">
                    <Phone size={20} />
                    Telefone
                  </span>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                      <Calendar size={24} color="green" />
                      25/11/1988
                    </span>
                    <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                      <Calendar size={24} color="red" />
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col overflow-auto py-2 md:max-w-5xl m-auto md:py-6">
        <table>
          <thead className="p-4 bg-gray-300">
            <tr>
              <th>Farmácia</th>
              <th>Telefone</th>
              <th>Bairro</th>
              <th>Inicio</th>
              <th>Fim</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 text-center">
              <td>Nome da farmacia</td>
              <td>Telefone da farmacia</td>
              <td>Bairro</td>
              <td>25/11/1988</td>
              <td>25/11/1988</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-10 pb-6 flex flex-col gap-4 md:max-w-5xl m-auto">
        <p>
          Início do plantão: sábado às 12 horas. Término do plantão: próximo
          sábado às 12 horas.{" "}
        </p>
        <p>
          O atendimento das demais farmácias será de 2ª a 6ª feira das 07 até às
          19 horas e sábado das 07 às 12 horas.{" "}
        </p>
        <p>
          Caso a farmácia escalada para plantão não dispor de Responsável
          Técnico (R.T. farmacêutico) habilitado, a mesma não poderá cumprir o
          plantão, retornando apenas na próxima data, se estiver regularizada.
          Na presença dos interessados uma farmácia será sorteada para assumir
          esse plantão e comunicado o setor de Vigilância Sanitária. O R.T.
          sempre que necessitar se ausentar, deverá comunicar a VISA por
          escrito, com antecedência. Sendo de total responsabilidade do
          estabelecimento de plantão, o atendimento noturno, com presença do
          R.T.{" "}
        </p>
        <p>
          Não é permitida a concessão de plantões entre os estabelecimentos, em
          casos extremos o mesmo poderá ser trocado e o setor da Vigilância
          Sanitária, comunicado no mínimo com 15 dias de antecedência, por
          escrito com documento firmado em cartório, podendo ou não a Vigilância
          Sanitária deferir a mudança.{" "}
        </p>
        <p>
          Havendo abertura ou fechamento de estabelecimentos farmacêuticos,
          caberá ao Departamento de Vigilância em Saúde, setor de Vigilância
          Sanitária, a alteração da escala de plantões. A escala pode ser
          alterada, pela Vigilância Sanitária, caso haja necessidade.{" "}
        </p>
        <p>
          Solicitação de entrada na escala de plantão somente será realizada nos
          meses de junho e dezembro do ano vigente.
        </p>
        <p>
          Avenida dos Estados, nº 2111 – Centro – Telefone: (45) 3541-1149 –
          CEP: 85875-000 <br />
          Página Oficial:{" "}
          <a className="text-green-600" href="https://www.stitaipu.pr.gov.br">
            www.stitaipu.pr.gov.br
          </a>
          <br />
          E-mail: vigilanciasti@gmail.com
        </p>
      </div>
    </section>
  );
}
