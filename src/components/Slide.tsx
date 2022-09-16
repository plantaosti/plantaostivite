import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Calendar,
  CaretLeft,
  CaretRight,
  Phone,
  SpinnerGap,
} from "phosphor-react";
import ptBr from "date-fns/locale/pt-BR";
import { format } from "date-fns";
import { useGetPlantoesStartEndQuery } from "../graphql/generated";
import { date } from "yup/lib/locale";
import { ptBR } from "date-fns/locale";

export function Slide() {
  const start = format(Date.now(), "yyyy-MM-d'T'15:00:00+00:00");
  const { data } = useGetPlantoesStartEndQuery({
    variables: {
      start,
    },
  });
  function Formatardata($datas:any){
    return(format($datas, "d-M-yyyy",{locale: ptBR}))
  }
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
    <section className="w-full flex-col bg-gray-100 dark:bg-gray-300 mt-8">
      <div className="grid lg:grid-cols-16 md:grid-cols-16 max-w-[986px] m-auto mt-12">
        <div className="flex m-auto p-6 md:order-2">
          <Swiper
            className="rounded-lg drop-shadow-xl w-[17rem] md:w-[20rem] lg:w-[30rem]"
            effect={"coverflow"}
            slidesPerView={"auto"}
            grabCursor={true}
            loop={true}
            spaceBetween={24}
            modules={[Pagination, Navigation]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            pagination={true}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
          >
            {data?.plantoes.map((plantao) => {
              return (
                <SwiperSlide key={plantao.id}>
                  <img
                    className=""
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
                          {plantao.datetimestart}
                        </span>
                        <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                          <Calendar size={24} color="red" />
                          {plantao.datetimeend}
                        </span>
                      </div>
                    </div>
                  </div>
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
        <div className="p-6 flex flex-col gap-5 justify-center align-middle order-1 md:max-w-sm lg:max-w-md">
          <h3 className="text-xl lg:text-5xl font-bold text-gray-400 dark:text-gray-100">
            Farmácia de Plantão
          </h3>
          <p className="text-sm text-gray-400 lg:text-lg dark:text-gray-50">
            Confira a lista atualizada dos plantões para este mês.
          </p>
          <Link
            to="/plantoes"
            className="bg-green-600 p-4 max-w-[200px] flex justify-center text-white hover:bg-gray-400 transition-all duration-300 dark:bg-gray-600 dark:hover:bg-gray-400"
          >
            Lista completa
          </Link>
        </div>
      </div>
    </section>
  );
}
