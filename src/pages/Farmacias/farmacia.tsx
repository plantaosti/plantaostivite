import {
  Envelope,
  Flag,
  InstagramLogo,
  NavigationArrow,
  Phone,
  Pill,
  WhatsappLogo,
} from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useGetFarmaciaBySlugQuery } from "../../graphql/generated";

export function PgFarmacia() {
  const { slug } = useParams<{ slug: string }>();
  const { data } = useGetFarmaciaBySlugQuery({
    variables: {
      slug,
    },
  });

  if (!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }
  if (!slug) {
    return (
      <div>
        <p>Erro</p>
      </div>
    );
  }
  return (
    <>
      <Header />
      <main className="mt-20 w-full antialiased dark:bg-gray-200">
        <section className="max-w-full flex-col m-auto p-6">
          <Breadcrumbs />

          <div className="flex flex-col lg:flex-row gap-7 max-w-5xl m-auto py-6">
            <div>
              <img
                className="md:max-w-[450px] m-auto rounded-md"
                src={`https://www.plantaosti.com.br/images/${data.farmacia?.urllogo}`}
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
                    <li className="flex items-center gap-2">
                      <WhatsappLogo size={24} />{" "}
                      <a
                        href={`https://api.whatsapp.com/send?1=pt_BR&phone=+${data.farmacia?.whatsapp}`}
                      >
                        {data.farmacia?.whatsapp}
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <InstagramLogo size={24} />{" "}
                      <a
                        href={`https://instagram.com/{data.farmacia?.instagram}`}
                      >
                        {data.farmacia?.instagram}
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Envelope size={24} /> {data.farmacia?.email}
                    </li>
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
                <div>
                  <table>
                    <thead>
                      <th>
                        <td className="text-lg flex gap-2">
                          <Pill size={32} />
                          Programas
                        </td>
                      </th>
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
                  </table>
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
