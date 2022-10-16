import { Helmet } from "react-helmet";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Sobre() {
  return (
    <>
      <Helmet title="Sobre Plantão STI">
        <meta
          name="keywords"
          content="Farmácia de plantao, plantão em santa terezinha de itaipu, farmácias em santa terezinha de itaipu, farmácia aberta final de semana, farmácia de plantão hoje"
        />
        <meta
          name="description"
          content="Plantão STI | Ferramenta que Facilita a Vida na Hora de Saber qual a Farmácia Disponível e Aberta no Final de Semana em Santa Terezinha de Itaipu."
        />
      </Helmet>
      <Header />
      <main className="mt-20 w-full antialiased dark:bg-gray-200">
        <section className="max-w-full flex-col m-auto p-6">
          <Breadcrumbs
            breadcrumbs={[
              { name: "Home", href: "/" },
              { name: "Sobre", href: "/sobre" },
            ]}
          />
          <div className="flex max-w-5xl m-auto pb-5 justify-center">
            <h3 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-600">
              Sobre
            </h3>
          </div>
          <div className="flex flex-col items-end gap-7 max-w-5xl m-auto py-6">
            <p>
              Ferramenta simples exclusiva para a minha cidade Santa Terezinha
              de Itaipu, um acordo entre as farmácias resultou em uma lei
              municipal que determina inicio e fim do plantão para cada
              farmácia, respeitando uma tabela pré-determinada, cada farmácia
              tem uma semana que permite suas atividades 24 horas, com início as
              12:00h no sábado e termino 11:59h do sábado seguinte, essa
              farmácia tem exclusividade para que seu atendimento ao público
              seja feito sem interrupções durante 7 dias.
            </p>
            <p>
              No formato de rodízio e respeitando o cronograma, todos os sábados
              uma farmácia finaliza o atendimento e outra inicia é nesse momento
              em que o Plantão STI entra para fazer a diferença na rotina do
              cidadão Itaipuenses, nossa cidade hoje conta com treze farmácias
              no total, a dúvida do cidadão surge aí, qual farmácia vai iniciar
              hoje ou qual está de plantão, o comum durante muito tempo, foi a
              busca manual por essa informação obrigando o cidadão percorrer
              quase toda a cidade para descobrir muitas vezes que a farmácia ao
              lado da sua casa era a que estava fazendo o atendimento normal.
              Plantão STI traz em suas funcionalidades exatamente essa
              informação oportuna, a ferramenta destaca não apenas farmácia
              plantonista mas também as próximas que sucederam, contendo as
              informações básicas como endereço, contato, data do início e fim
              do plantão. Outra funcionalidade é a listagem com todas as
              farmácias seguidas também de suas informações.
            </p>
            <p>
              Agora ao invés de percorrer toda a cidade em busca da farmácia
              aberta, sem sair de casa, você tem essas informações na palma das
              mãos ou na tela do seu computador.
            </p>
            <div className="flex items-center gap-4">
              <div>
                <p>
                  Desenvolvido:
                  <br />
                  <b>Anderson Lopes</b>
                </p>
              </div>
              <img
                className="rounded-[50%]"
                width="150"
                src="https://avatars.githubusercontent.com/u/4048207"
                alt=""
              />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
