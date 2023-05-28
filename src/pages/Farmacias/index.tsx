"use client";
import { Flag, Phone, SpinnerGap } from "phosphor-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useGetFarmaciasAllQuery } from "../../graphql/generated";
import { Helmet } from "react-helmet";
import classNames from "classnames";
import { useEffect, useState } from "react";

export function PgFarmacias() {
  const { data, loading } = useGetFarmaciasAllQuery();
  const [isActivoBairro, setIsActivoBairro] = useState("Centro");

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Farmácias | Santa Terezinha de Itaipu</title>
          <meta
            name="description"
            content="Confira a lista com todas as farmácias de Santa Terezinha de Itaipu - Paraná"
          />
          <meta
            name="keywords"
            content="Farmácias, Farmácia de Plantão, Farmácia Clarifarma, Farmácia Coperfarma, Farmácia Preço Justo, Farmácia Santa Monica, Farmácia Medfarma"
          />
        </Helmet>
        <Header />
        <main className="mt-20 w-full antialiased dark:bg-gray-200 animate-pulse opacity-20">
          <section className="max-w-full flex-col m-auto p-6">
            <Breadcrumbs
              breadcrumbs={[
                { name: "Home", href: "/" },
                { name: "Farmácias", href: "/farmacais" },
              ]}
            />
            <div className="flex max-w-5xl m-auto pb-5 justify-center">
              <h3 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
                Farmácias
              </h3>
            </div>
            <div className="flex justify-center">
              <div className="flex gap-3 md:hidden">
                <form action="">
                  <div className="flex flex-1 px-6 bg-slate-400">
                    <select
                      title="Selecione o bairro desejado"
                      name="bairro"
                      id=""
                      className="flex flex-1 bg-slate-400 py-2 text-white outline-none"
                    >
                      <option value="centro">Centro</option>
                      <option value="centro">Parque dos Estados</option>
                      <option value="centro">Santa Monica</option>
                    </select>
                  </div>
                </form>
              </div>
              <ul className="hidden md:flex gap-3">
                <li data-filter=".centro">
                  <button className="bg-gray-500 py-2 px-5 text-gray-100 text-sm">
                    Centro
                  </button>
                </li>
                <li data-filter=".parque-dos-estados">
                  <button className="bg-gray-500 py-2 px-5 text-gray-100 text-sm">
                    Parque dos Estados
                  </button>
                </li>
                <li data-filter=".santa-monica">
                  <button className="bg-gray-500 py-2 px-5 text-gray-100 text-sm">
                    Santa Mônica
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col max-w-5xl m-auto py-4">
              <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4">
                <li>
                  <Link
                    to={"#"}
                    className="flex flex-col gap-2 md:gap-4 justify-center p-4 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                  >
                    <img
                      className="m-auto rounded-md"
                      src="/images/default_geocode-2x.png"
                      alt=""
                    />
                    <div>
                      <h4 className="text-sm md:text-lg text-green-600 font-semibold pb-2">
                        Farmácia
                      </h4>
                      <ul className="flex flex-col gap-1 text-gray-400">
                        <li className="flex items-center gap-2 text-sm">
                          <Flag size={20} />
                          Bairro
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Phone size={20} />
                          Telefone
                        </li>
                      </ul>
                    </div>
                    <div className="flex mx-4 md:mx-2 justify-center">
                      <button className="bg-green-600 px-6 p-2 max-w-[200px] flex justify-center text-white hover:bg-gray-400 transition-all duration-300 dark:bg-gray-600 dark:hover:bg-gray-400">
                        Detalhes
                      </button>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"#"}
                    className="flex flex-col gap-2 md:gap-4 justify-center p-4 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                  >
                    <img
                      className="m-auto rounded-md"
                      src="/images/default_geocode-2x.png"
                      alt=""
                    />
                    <div>
                      <h4 className="text-sm md:text-lg text-green-600 font-semibold pb-2">
                        Farmácia
                      </h4>
                      <ul className="flex flex-col gap-1 text-gray-400">
                        <li className="flex items-center gap-2 text-sm">
                          <Flag size={20} />
                          Bairro
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Phone size={20} />
                          Telefone
                        </li>
                      </ul>
                    </div>
                    <div className="flex mx-4 md:mx-2 justify-center">
                      <button className="bg-green-600 px-6 p-2 max-w-[200px] flex justify-center text-white hover:bg-gray-400 transition-all duration-300 dark:bg-gray-600 dark:hover:bg-gray-400">
                        Detalhes
                      </button>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"#"}
                    className="flex flex-col gap-2 md:gap-4 justify-center p-4 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                  >
                    <img
                      loading="lazy"
                      className="m-auto rounded-md"
                      src="/images/default_geocode-2x.png"
                      alt=""
                    />
                    <div>
                      <h4 className="text-sm md:text-lg text-green-600 font-semibold pb-2">
                        Farmácia
                      </h4>
                      <ul className="flex flex-col gap-1 text-gray-400">
                        <li className="flex items-center gap-2 text-sm">
                          <Flag size={20} />
                          Bairro
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Phone size={20} />
                          Telefone
                        </li>
                      </ul>
                    </div>
                    <div className="flex mx-4 md:mx-2 justify-center">
                      <button className="bg-green-600 px-6 p-2 max-w-[200px] flex justify-center text-white hover:bg-gray-400 transition-all duration-300 dark:bg-gray-600 dark:hover:bg-gray-400">
                        Detalhes
                      </button>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          <Footer />
        </main>
      </>
    );
  }
  return (
    <>
      <Helmet>
        <title>Farmácias | Santa Terezinha de Itaipu</title>
        <meta
          name="description"
          content="Confira a lista com todas as farmácias de Santa Terezinha de Itaipu - Paraná"
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
              { name: "Farmácias", href: "/farmacais" },
            ]}
          />
          <div className="flex max-w-5xl m-auto pb-5 justify-center">
            <h3 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
              Farmácias
            </h3>
          </div>
          <div className="flex justify-center">
            <div className="flex gap-3">
              <form action="">
                <div className="flex flex-1 px-6 bg-slate-400">
                  <select
                    title="Selecione o bairro desejado"
                    name="bairro"
                    onChange={(e) => setIsActivoBairro(e.target.value)}
                    className="flex flex-1 bg-slate-400 py-2 text-white outline-none"
                  >
                    <option value="Centro">Centro</option>
                    <option value="Parque dos Estados">
                      Parque dos Estados
                    </option>
                    <option value="Santa Monica">Santa Monica</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col max-w-5xl m-auto py-4">
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4">
              {data?.farmacias.map((farmacia) => {
                return (
                  <li
                    key={farmacia.id}
                    className={classNames("block", {
                      block: isActivoBairro == farmacia.neighborhood,
                      hidden: isActivoBairro != farmacia.neighborhood,
                    })}
                  >
                    <Link
                      to={`/farmacia/${farmacia.slug}`}
                      className="flex flex-col gap-2 md:gap-4 justify-center p-4 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                    >
                      <img
                        loading="lazy"
                        className="m-auto rounded-md"
                        src={`${farmacia.thumbnail?.url}`}
                        alt=""
                      />
                      <div>
                        <h4 className="text-sm md:text-lg text-green-600 font-semibold pb-2">
                          {farmacia.name}
                        </h4>
                        <ul className="flex flex-col gap-1 text-gray-400">
                          <li className="flex items-center gap-2 text-sm">
                            <Flag size={20} />
                            {farmacia.neighborhood}
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <Phone size={20} />
                            {farmacia.phone}
                          </li>
                        </ul>
                      </div>
                      <div className="flex mx-4 md:mx-2 justify-center">
                        <button className="bg-green-600 px-6 p-2 max-w-[200px] flex justify-center text-white hover:bg-gray-400 transition-all duration-300 dark:bg-gray-600 dark:hover:bg-gray-400">
                          Detalhes
                        </button>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
