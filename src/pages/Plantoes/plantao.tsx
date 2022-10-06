import { format } from "date-fns";
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
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useGetPlantaoByIdQuery } from "../../graphql/generated";

export function PgPlantao() {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useGetPlantaoByIdQuery({
    variables: {
      id,
    },
  });
  if (loading) {
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
      <Helmet>
        <title>
          Plantão {data?.plantao?.farmacias?.name} | Santa Terezinha de Itaipu
        </title>
        <meta
          name="description"
          content={`Confira os detalhes do plantão da farmácia ${data?.plantao?.farmacias?.name}`}
        />
        <meta
          name="keywords"
          content={`${data?.plantao?.farmacias?.name}, Plantão, Farmácias, Farmácia de Plantão`}
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
          <div className="flex flex-col lg:flex-row gap-7 max-w-5xl m-auto py-6">
            <div>
              <img
                className="md:max-w-[450px] m-auto rounded-md"
                src={`/images/${data?.plantao?.farmacias?.urllogo}`}
                alt=""
              />
            </div>
            <div>
              <h4 className="text-xl text-gray-400 font-bold mb-6">
                {data?.plantao?.farmacias?.name}
              </h4>
              <div className="flex flex-col gap-5 text-gray-400">
                <p>{data?.plantao?.farmacias?.description}</p>
                <hr />
                <div>
                  <ul className="flex flex-col gap-3 text-gray-400">
                    <li className="flex items-center gap-2">
                      <Phone size={24} />
                      {data?.plantao?.farmacias?.phone}
                    </li>
                    {data?.plantao?.farmacias?.whatsapp ? (
                      <li className="flex items-center gap-2">
                        <WhatsappLogo size={24} />{" "}
                        <a
                          className="text-gray-400 hover:text-gray-600"
                          target="_blank"
                          href={`https://api.whatsapp.com/send?1=pt_BR&phone=+${data?.plantao?.farmacias?.whatsapp}`}
                        >
                          {data?.plantao?.farmacias?.whatsapp}
                        </a>
                      </li>
                    ) : (
                      ""
                    )}
                    {data?.plantao?.farmacias?.instagram ? (
                      <li className="flex items-center gap-2">
                        <InstagramLogo size={24} />{" "}
                        <a
                          className=""
                          target="_blank"
                          href={`https://www.instagram.com/${data?.plantao?.farmacias?.instagram}`}
                        >
                          {data?.plantao?.farmacias?.instagram}
                        </a>
                      </li>
                    ) : (
                      ""
                    )}
                    {data?.plantao?.farmacias?.neighborhood ? (
                      <li className="flex items-center gap-2">
                        <Envelope size={24} /> {data?.plantao?.farmacias?.email}
                      </li>
                    ) : (
                      ""
                    )}
                    <li className="flex items-center gap-2">
                      <NavigationArrow size={24} />
                      {data?.plantao?.farmacias?.street}
                    </li>
                    <li className="flex items-center gap-2">
                      <Flag size={24} />
                      {data?.plantao?.farmacias?.neighborhood}
                    </li>
                  </ul>
                </div>
                <hr />
                <div>
                  {/* <table>
                    <thead>
                      <tr>
                        <th className="text-lg flex gap-2">
                          <Pill size={32} />
                          Programas
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Farmacias Popular</td>
                      </tr>
                      <tr>
                        <td>Vale Mais Saude</td>
                      </tr>
                      <tr>
                        <td>Vidalink</td>
                      </tr>
                      <tr>
                        <td>Pharmalink</td>
                      </tr>
                      <tr>
                        <td>Funcional Card</td>
                      </tr>
                      <tr>
                        <td>Pec Febrafar</td>
                      </tr>
                      <tr>
                        <td>Object Pro</td>
                      </tr>
                      <tr>
                        <td>MAP MasterFarma</td>
                      </tr>
                      <tr>
                        <td>Ellomais / Facillite</td>
                      </tr>
                      <tr>
                        <td>Orizon</td>
                      </tr>
                      <tr>
                        <td>Transaction Centre</td>
                      </tr>
                    </tbody>
                  </table> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
