import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar, Phone } from "phosphor-react";
import { useGetPlantoesStartEndQuery } from "../../graphql/generated";

export function Pgstory() {
  const end = format(Date.now(), "yyyy-MM-d'T'hh:mm:00+00:00");
  const { data } = useGetPlantoesStartEndQuery({
    variables: {
      end,
    },
  });
  return (
    <section className="pt-[132px] m-auto flex flex-col items-center bg-gray-200">
      <div className="my-6 mx-2 gap-60 drop-shadow-xl grid">
        {data?.plantoes.map((plantao) => {
          return (
            <div className="w-[90vw]">
              <img
                className="rounded-t-lg w-[90vw]"
                src={`https://plantaosti.com.br/images/${plantao.farmacias?.urllogo}`}
                alt=""
              />
              <div className="bg-white p-4 rounded-b-lg max-w-[90vw]">
                <h3 className="text-gray-400 text-lg mb-3 md:text-xl lg:text-2xl font-bold">
                  {plantao.farmacias?.name}
                </h3>
                <div className="">
                  <p className="text-sm text-gray-500 flex gap-2 items-center mb-3">
                    {plantao.farmacias?.neighborhood} |{" "}
                    {plantao.farmacias?.street}
                  </p>
                  <p className="text-sm text-gray-500 flex gap-2 items-center mb-3">
                    <Phone size={20} />
                    {plantao.farmacias?.phone}
                  </p>
                  <div className="flex justify-between ">
                    <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                      <Calendar size={24} color="green" />
                      {format(parseISO(plantao.datetimestart), "dd/MM/yy", {
                        locale: ptBR,
                      })}
                    </span>
                    <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                      <Calendar size={24} color="red" />
                      {format(parseISO(plantao.datetimeend), "dd/MM/yy", {
                        locale: ptBR,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
