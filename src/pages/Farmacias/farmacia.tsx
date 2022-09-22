import {
  Envelope,
  Flag,
  InstagramLogo,
  NavigationArrow,
  Phone,
  Pill,
  SpinnerGap,
  WhatsappLogo,
} from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useGetFarmaciaBySlugQuery } from "../../graphql/generated";

interface IProgramas {
  name: string;
  ativo: boolean;
}
export function PgFarmacia() {
  const { slug } = useParams<{ slug: string }>();
  const { data } = useGetFarmaciaBySlugQuery({
    variables: {
      slug,
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
          <Breadcrumbs
            breadcrumbs={[
              { href: "/", name: "Home" },
              { href: "/farmacias", name: "Farmácias" },
              {
                href: `/farmacia/${data.farmacia?.slug}`,
                name: `${data.farmacia?.name}`,
              },
            ]}
          />

          <div className="flex flex-col lg:flex-row gap-7 max-w-5xl m-auto py-6">
            <div>
              <img
                className="md:max-w-[450px] m-auto rounded-md"
                src={`/images/${data.farmacia?.urllogo}`}
                alt=""
              />
            </div>
            <div>
              <h4 className="text-xl text-gray-400 font-bold mb-6">
                {data.farmacia?.name}
              </h4>
              <div className="flex flex-col gap-5 text-gray-400">
                <p>{data.farmacia?.description}</p>
                <hr />
                <div>
                  <ul className="flex flex-col gap-3 text-gray-400">
                    <li className="flex items-center gap-2">
                      <Phone size={24} />
                      {data.farmacia?.phone}
                    </li>
                    {data.farmacia?.whatsapp ? (
                      <li className="flex items-center gap-2">
                        <WhatsappLogo size={24} />{" "}
                        <a
                          className="text-gray-400 hover:text-gray-600"
                          target="_blank"
                          href={`https://api.whatsapp.com/send?1=pt_BR&phone=+${data.farmacia?.whatsapp}`}
                        >
                          {data.farmacia?.whatsapp}
                        </a>
                      </li>
                    ) : (
                      ""
                    )}
                    {data.farmacia?.instagram ? (
                      <li className="flex items-center gap-2">
                        <InstagramLogo size={24} />{" "}
                        <a
                          className=""
                          target="_blank"
                          href={`https://www.instagram.com/${data.farmacia?.instagram}`}
                        >
                          {data.farmacia?.instagram}
                        </a>
                      </li>
                    ) : (
                      ""
                    )}
                    {data.farmacia?.neighborhood ? (
                      <li className="flex items-center gap-2">
                        <Envelope size={24} /> {data.farmacia?.email}
                      </li>
                    ) : (
                      ""
                    )}
                    <li className="flex items-center gap-2">
                      <NavigationArrow size={24} />
                      {data.farmacia?.street}
                    </li>
                    <li className="flex items-center gap-2">
                      <Flag size={24} />
                      {data.farmacia?.neighborhood}
                    </li>
                  </ul>
                </div>
                <hr />
                <div></div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
