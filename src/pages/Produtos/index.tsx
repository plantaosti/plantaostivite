import {
  Article,
  Envelope,
  Flag,
  NavigationArrow,
  Phone,
  WhatsappLogo,
} from "phosphor-react";
import { useParams, Link } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function PgProdutos() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <>
      <Header />
      <main className="mt-20 w-full antialiased dark:bg-gray-200">
        {slug ? (
          <section className="max-w-full flex-col m-auto p-6">
            <Breadcrumbs
              breadcrumbs={[
                { name: "Home", href: "/" },
                { name: "Produtos", href: `/produtos` },
                { name: `${slug}`, href: `/produto/${slug}` },
              ]}
            />

            <div className="flex flex-col lg:flex-row gap-7 max-w-5xl m-auto py-6">
              <div>
                <img
                  className="md:max-w-[450px] m-auto rounded-lg"
                  src="https://images.prismic.io/plantaosti/7f2e3238-66f3-4e30-afb0-37c6e07498cf_517sIu208oL._AC_SL1000_.jpg?auto=compress,format"
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-xl text-gray-400 font-bold mb-6">
                  Multifuncional HP Smart Tank 514 Tanque de Tinta
                </h4>
                <div className="flex flex-col gap-5 text-gray-400">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis odio nobis hic exercitationem aliquam ducimus
                    commodi maiores aspernatur ad tenetur eaque ipsum tempore,
                    iusto distinctio dolore placeat voluptatum alias nisi!
                  </p>
                  <hr />
                  <div>
                    <ul className="flex flex-col gap-3 text-gray-400">
                      <li className="flex items-center gap-2">
                        <Phone size={24} />
                        45 35412990
                      </li>
                      <li className="flex items-center gap-2">
                        <WhatsappLogo size={24} /> 45 35412990
                      </li>
                      <li className="flex items-center gap-2">
                        <Envelope size={24} /> farmacia@farmacia.com
                      </li>
                      <li className="flex items-center gap-2">
                        <NavigationArrow size={24} />
                        Rua Primeiro de maio, 166
                      </li>
                      <li className="flex items-center gap-2">
                        <Flag size={24} />
                        Centro
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th className="text-lg flex gap-2">
                            <Article size={32} />
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
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="max-w-full flex-col m-auto p-6">
            <Breadcrumbs
              breadcrumbs={[
                { name: "Home", href: "/" },
                { name: "Produtos", href: `/produtos` },
              ]}
            />
            <div className="flex max-w-5xl m-auto pb-5 justify-center">
              <h3 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
                Produtos
              </h3>
            </div>
            <div className="flex flex-col max-w-5xl m-auto py-6">
              <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
                <li>
                  <Link
                    to="/produto/multifuncional-hp-smart-tank-514-tanque-de-tinta"
                    className="flex flex-col gap-4 justify-center p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                  >
                    <div className="bg-white p-3 rounded-lg">
                      <img
                        className="max-w-[200px] max-h-[200px] m-auto rounded-lg"
                        src="https://images.prismic.io/plantaosti/7f2e3238-66f3-4e30-afb0-37c6e07498cf_517sIu208oL._AC_SL1000_.jpg?auto=compress,format"
                        alt=""
                      />
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-600 font-semibold">
                        Multifuncional HP Smart Tank 514 Tanque de Tinta
                      </h4>
                      <div className="flex gap-4 items-center text-gray-400 pt-4">
                        <p className="text-sm truncate">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eum quibusdam recusandae praesentium quidem
                          officiis! Non officiis, cumque quos aperiam illum
                          consequuntur alias, ipsum assumenda quibusdam
                          perferendis quod soluta quam corrupti!
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/produto/echo-dot-4g-smart-speaker-com-alexa"
                    className="flex flex-col gap-4 justify-center p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                  >
                    <div className="bg-white p-3 rounded-lg">
                      <img
                        className="max-w-[200px] max-h-[200px] m-auto rounded-lg"
                        src="https://images.prismic.io/plantaosti/b99a9d41-0c87-4e1e-a789-b8255826372c_Echo+Dot+%284%C2%AA+Gerac%CC%A7a%CC%83o%29-+Smart+Speaker+com+Alexa+-+Cor+Preta.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-600 font-semibold">
                        Echo Dot 4ª G - Smart Speaker com Alexa
                      </h4>
                      <div className="flex gap-4 items-center text-gray-400 pt-4">
                        <p className="text-sm truncate">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eum quibusdam recusandae praesentium quidem
                          officiis! Non officiis, cumque quos aperiam illum
                          consequuntur alias, ipsum assumenda quibusdam
                          perferendis quod soluta quam corrupti!
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/produto/steamer-vaporizador-profissional-sr-9000-220v"
                    className="flex flex-col gap-4 justify-center p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                  >
                    <div className="bg-white p-3 rounded-lg">
                      <img
                        className="max-w-[200px] max-h-[200px] m-auto"
                        src="https://images.prismic.io/plantaosti/3574427a-5df6-42b7-8417-ed02d14c688a_steamer.jpeg"
                        alt=""
                      />
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-600 font-semibold">
                        Steamer Vaporizador Profissional SR-9000 220V
                      </h4>
                      <div className="flex gap-4 items-center text-gray-400 pt-4">
                        <p className="text-sm truncate">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eum quibusdam recusandae praesentium quidem
                          officiis! Non officiis, cumque quos aperiam illum
                          consequuntur alias, ipsum assumenda quibusdam
                          perferendis quod soluta quam corrupti!
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/produto/smart-tv-lg-43-4k-uhd-43p75000-wifi"
                    className="flex flex-col gap-4 justify-center p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                  >
                    <div className="bg-white p-3 rounded-lg">
                      <img
                        className="max-w-[200px] max-h-[200px] m-auto rounded-lg"
                        src="https://images.prismic.io/plantaosti/dfeea5b9-afe6-4456-bc41-37d9381bdfb6_SmartTvLG434K.jpeg"
                        alt=""
                      />
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-600 font-semibold">
                        Smart Tv LG 43" 4K UHD 43UP7500 Wifi
                      </h4>
                      <div className="flex gap-4 items-center text-gray-400 pt-4">
                        <p className="text-sm truncate">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eum quibusdam recusandae praesentium quidem
                          officiis! Non officiis, cumque quos aperiam illum
                          consequuntur alias, ipsum assumenda quibusdam
                          perferendis quod soluta quam corrupti!
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        )}
        <Footer />
      </main>
    </>
  );
}
