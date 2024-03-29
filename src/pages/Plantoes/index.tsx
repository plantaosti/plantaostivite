import {
  Calendar,
  CaretLeft,
  CaretRight,
  Phone,
  SpinnerGap,
} from "phosphor-react";

import { Link } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { format, parseISO } from "date-fns";
import { useGetPlantoesDateEndQuery } from "../../graphql/generated";
import { ptBR } from "date-fns/locale";
import { Helmet } from "react-helmet";
import { PlantaoFake } from "../../components/PlantaoFake";

export function PgPlantoes() {
  const end = format(Date.now(), "yyyy-MM-dd'T'15:00:00+00:00");
  const { data, loading, error } = useGetPlantoesDateEndQuery({
    variables: {
      end,
    },
  });
  if (loading) {
    return (
      <>
        <Header />
        <main className="mt-20 w-full antialiased dark:bg-gray-200 animate-pulse opacity-25">
          <PlantaoFake />

          <Footer />
        </main>
      </>
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
      <Helmet>
        <title>Plantão | Santa Terezinha de Itaipu</title>
        <meta
          name="description"
          content="Confira com as farmácias e datas dos seu plantão em Santa Terezinha de Itaipu - Paraná"
        />
        <meta
          name="keywords"
          content="Farmácias, Farmácia de Plantão, Farmácia Clarifarma, Farmácia Coperfarma, Farmácia Preço Justo, Farmácia Santa Monica, Farmácia Medfarma"
        />
      </Helmet>
      <Header />
      <main className="mt-20 w-full antialiased dark:bg-gray-200">
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
            <Swiper
              className="flex"
              effect={"coverflow"}
              slidesPerView={"auto"}
              grabCursor={true}
              spaceBetween={24}
              modules={[Pagination, Navigation]}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
            >
              {data?.plantoes
                .map((plantao, i) => {
                  return (
                    <SwiperSlide className="" key={i}>
                      <Link
                        to={`/plantao/${plantao.id}`}
                        className="flex flex-col justify-center bg-slate-100 transition-all duration-200 rounded-lg"
                      >
                        <img
                          className="rounded-lg"
                          src={`${plantao.farmacias?.thumbnail?.url}`}
                          alt=""
                        />
                        <div className="bg-white p-4">
                          <h3 className="text-gray-400 text-lg mb-3 md:text-xl lg:text-2xl font-bold">
                            {plantao.farmacias?.name}
                          </h3>
                          <div className="">
                            <span className="text-sm text-gray-500 flex gap-2 items-center mb-3">
                              <Phone size={20} />
                              {plantao.farmacias?.phone}
                            </span>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                                <Calendar size={24} color="green" />
                                {format(
                                  parseISO(plantao.datetimestart),
                                  "dd/MM/yy",
                                  {
                                    locale: ptBR,
                                  }
                                )}
                              </span>
                              <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                                <Calendar size={24} color="red" />
                                {format(
                                  parseISO(plantao.datetimeend),
                                  "dd/MM/yy",
                                  {
                                    locale: ptBR,
                                  }
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })
                .slice(0, 3)}
              <div className="swiper-button-prev text-white after:content-['']">
                <CaretLeft className="text-2xl lg:text-4xl" />
              </div>
              <div className="swiper-button-next text-white after:content-['']">
                <CaretRight className="text-2xl lg:text-4xl" />
              </div>
            </Swiper>
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
                {data?.plantoes
                  .map((plantao, i) => {
                    return (
                      <tr className="bg-gray-100 text-center" key={i}>
                        <td>{plantao.farmacias?.name}</td>
                        <td>{plantao.farmacias?.phone}</td>
                        <td>{plantao.farmacias?.neighborhood}</td>
                        <td>
                          {format(parseISO(plantao.datetimestart), "dd/MM/yy", {
                            locale: ptBR,
                          })}
                        </td>
                        <td>
                          {format(parseISO(plantao.datetimeend), "dd/MM/yy", {
                            locale: ptBR,
                          })}
                        </td>
                      </tr>
                    );
                  })
                  .slice(3, 10)}
              </tbody>
            </table>
          </div>
          <div className="mt-10 pb-6 flex flex-col gap-4 md:max-w-5xl m-auto">
            <p>
              Início do plantão: sábado às 12 horas. Término do plantão: próximo
              sábado às 12 horas.{" "}
            </p>
            <p>
              O atendimento das demais farmácias será de 2ª a 6ª feira das 07
              até às 19 horas e sábado das 07 às 12 horas.{" "}
            </p>
            <p>
              Caso a farmácia escalada para plantão não dispor de Responsável
              Técnico (R.T. farmacêutico) habilitado, a mesma não poderá cumprir
              o plantão, retornando apenas na próxima data, se estiver
              regularizada. Na presença dos interessados uma farmácia será
              sorteada para assumir esse plantão e comunicado o setor de
              Vigilância Sanitária. O R.T. sempre que necessitar se ausentar,
              deverá comunicar a VISA por escrito, com antecedência. Sendo de
              total responsabilidade do estabelecimento de plantão, o
              atendimento noturno, com presença do R.T.{" "}
            </p>
            <p>
              Não é permitida a concessão de plantões entre os estabelecimentos,
              em casos extremos o mesmo poderá ser trocado e o setor da
              Vigilância Sanitária, comunicado no mínimo com 15 dias de
              antecedência, por escrito com documento firmado em cartório,
              podendo ou não a Vigilância Sanitária deferir a mudança.{" "}
            </p>
            <p>
              Havendo abertura ou fechamento de estabelecimentos farmacêuticos,
              caberá ao Departamento de Vigilância em Saúde, setor de Vigilância
              Sanitária, a alteração da escala de plantões. A escala pode ser
              alterada, pela Vigilância Sanitária, caso haja necessidade.{" "}
            </p>
            <p>
              Solicitação de entrada na escala de plantão somente será realizada
              nos meses de junho e dezembro do ano vigente.
            </p>
            <p>
              Avenida dos Estados, nº 2111 – Centro – Telefone: (45) 3541-1149 –
              CEP: 85875-000 <br />
              Página Oficial:{" "}
              <a
                className="text-green-600"
                href="https://www.stitaipu.pr.gov.br"
              >
                www.stitaipu.pr.gov.br
              </a>
              <br />
              E-mail: vigilanciasti@gmail.com
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
