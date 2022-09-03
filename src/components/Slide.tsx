import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Calendar, CaretLeft, CaretRight, Phone } from "phosphor-react";

export function Slide() {
  return (
    <>
      <section className="w-full flex-col bg-slate-500 ">
        <div className="grid lg:grid-cols-16 md:grid-cols-16 max-w-[986px] m-auto">
          <div className="flex m-auto max-w-sm md:max-w-md lg:max-w-lg p-6 md:order-2">
            <Swiper
              className="rounded-lg"
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
              <SwiperSlide>
                <img
                  className=""
                  src="https://www.plantaosti.com.br/images/farmacia-coperfarma-wagner.jpg"
                  alt=""
                />
                <div className="bg-slate-300 p-4">
                  <h3 className="text-white text-lg mb-3 md:text-xl lg:text-2xl font-bold">
                    Farmácia Coperfarma
                  </h3>
                  <div className="">
                    <span className="text-sm flex gap-2 items-center mb-3">
                      <Phone size={20} />
                      45 3541-3230
                    </span>
                    <div className="flex justify-between">
                      <span className="text-sm flex gap-2 items-center p-1">
                        <Calendar size={24} color="green" />
                        Inicio: 03/09/2022
                      </span>
                      <span className="text-sm flex gap-2 items-center p-1">
                        <Calendar size={24} color="red" />
                        Fim: 10/09/2022
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className=""
                  src="https://www.plantaosti.com.br/images/farmacia-clarifarma-centro.jpg"
                  alt=""
                />
                <div className="bg-slate-300 p-4">
                  <h3 className="text-white text-lg mb-3 md:text-xl lg:text-2xl font-bold">
                    Farmácia Coperfarma
                  </h3>
                  <div className="">
                    <span className="text-sm flex gap-2 items-center mb-3">
                      <Phone size={20} />
                      45 3541-3230
                    </span>
                    <div className="flex justify-between">
                      <span className="text-sm flex gap-2 items-center p-1">
                        <Calendar size={24} color="green" />
                        Inicio: 03/09/2022
                      </span>
                      <span className="text-sm flex gap-2 items-center p-1">
                        <Calendar size={24} color="red" />
                        Fim: 10/09/2022
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className=""
                  src="https://www.plantaosti.com.br/images/farmacia-coperfarma-ronaldo.jpg"
                  alt=""
                />
                <div className="bg-slate-300 p-4">
                  <h3 className="text-white text-lg mb-3 md:text-xl lg:text-2xl font-bold">
                    Farmácia Coperfarma
                  </h3>
                  <div className="">
                    <span className="text-sm flex gap-2 items-center mb-3">
                      <Phone size={20} />
                      45 3541-3230
                    </span>
                    <div className="flex justify-between">
                      <span className="text-sm flex gap-2 items-center p-1">
                        <Calendar size={24} color="green" />
                        Inicio: 03/09/2022
                      </span>
                      <span className="text-sm flex gap-2 items-center p-1">
                        <Calendar size={24} color="red" />
                        Fim: 10/09/2022
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <div className="swiper-button-prev text-white after:content-['']">
                <CaretLeft className="text-2xl lg:text-3xl" />
              </div>
              <div className="swiper-button-next text-white after:content-['']">
                <CaretRight className="text-2xl lg:text-3xl" />
              </div>
            </Swiper>
          </div>
          <div className="p-6 flex flex-col gap-5 justify-center align-middle order-1 md:max-w-sm lg:max-w-md">
            <h3 className="text-xl lg:text-5xl font-bold text-white">
              Farmácia de Plantão
            </h3>
            <p className="text-sm lg:text-lg">
              Confira a lista atualizada do plantão para este mês.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
