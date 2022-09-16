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
import { useGetPlantoesStartEndQuery } from "../../graphql/generated";
import { ptBR } from "date-fns/locale";

export function PgPlantoes() {
  const start = format(Date.now(), "yyyy-MM-d'T'15:00:00+00:00");
  const { data } = useGetPlantoesStartEndQuery({
    variables: {
      start,
    },
  });
  if (!data) {
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
          <Breadcrumbs />
          <div className="flex max-w-5xl m-auto pb-5 justify-center">
            <h3 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
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
              {data.plantoes.map((plantao) => {
                return (
                  <SwiperSlide className="">
                    <Link
                      to={`/farmacia/${plantao.farmacias?.slug}`}
                      className="flex flex-col justify-center bg-slate-100 transition-all duration-200 rounded-lg"
                    >
                      <img
                        className="rounded-lg"
                        src={`https://www.plantaosti.com.br/images/${plantao.farmacias?.urllogo}`}
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
              })}
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
                  <th>Bairro</th>
                  <th>Inicio</th>
                  <th>Fim</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100 text-center">
                  <td>Lopsfarma</td>
                  <td>Centro</td>
                  <td>23/09/2022</td>
                  <td>23/09/2022</td>
                </tr>
                <tr className="bg-gray-300 text-center">
                  <td>Lopsfarma</td>
                  <td>Centro</td>
                  <td>23/09/2022</td>
                  <td>23/09/2022</td>
                </tr>
                <tr className="bg-gray-100 text-center">
                  <td>Lopsfarma</td>
                  <td>Centro</td>
                  <td>23/09/2022</td>
                  <td>23/09/2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
