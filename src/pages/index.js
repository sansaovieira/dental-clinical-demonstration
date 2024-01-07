import Head from 'next/head';
import styles from '../styles/Home.module.css';


import CardDepoimento from "../componentes/CardDepoimento";
import MolduraInformacoes from "../componentes/MolduraInformacoes";

export default function Home() {
  const Aparelho = "/assets/aparelho.png";
  const Cliente01 = "/assets/cliente01.png";
  const Cliente02 = "/assets/cliente02.png";
  const Cliente03 = "/assets/cliente03.png";
  const Dente = "/assets/dente.png";
  const Dentista01 = "/assets/dentista01.png";
  const Dentista02 = "/assets/dentista02.png";

  return (
    <>
      <Head>
        <title>Projeto Base</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className={styles.topo}>
          <div className={styles.container_logo}>
            <img
              src={Dente}
              alt="logo dentes saudáveis"
              title="logo dentes saudáveis"
            />
            <p>Dentes Saudáveis</p>
          </div>
        </header>

        {/* Apresentação */}
        <section className={styles.secao_apresentacao}>
          <div className={styles.container_texto_apresentacao}>
            <h1>
              Os melhores <span>aparelhos dentários</span>!
            </h1>
            <p>
              Confira abaixo todas as especialidades odontológicas que temos à sua
              disposição!
            </p>
          </div>

          <ul className={styles.lista_servicos}>
            <li>
              <img src={Dente} alt="logo" title="logo" />
              <p>Pré-avaliação</p>
            </li>

            <li>
              <img src={Dente} alt="logo" title="logo" />
              <p>Aparelhos Dentários</p>
            </li>

            <li>
              <img src={Dente} alt="logo" title="logo" />
              <p>Raio-X digital</p>
            </li>

            <li>
              <img src={Dente} alt="logo" title="logo" />
              <p>Clareamento dental</p>
            </li>
          </ul>
        </section>

        {/* Secao beneficios */}
        <section className={styles.secao_beneficios}>
          <div>
            <h2 className={styles.subtitulo}>
              Por que usar <span>aparelho?</span>
            </h2>
            <figure className={styles.container_img_aparelho}>
              <img
                src={Aparelho}
                alt="Imagem do uso de um aparelho"
                title="Imagem do uso de um aparelho"
              />
            </figure>
          </div>

          <ul className={styles.lista_beneficios}>
            <li>
              <h3>Alinhar os dentes</h3>
              <p>
                Dentes desalinhados causam problemas nos dentes e podem afetar a
                digestão dos alimentos e a respiração.
              </p>
            </li>

            <li>
              <h3>Melhorar a dicção e a higiene dentária</h3>
              <p>
                Muitas pessoas não conseguem nem usar fio dental devido à posição
                da sua dentição. Contudo, a correção possibilita o cuidado com a
                saúde bucal de forma bem mais ampla.
              </p>
            </li>

            <li>
              <h3>Corrigir espaço entre os dentes</h3>
              <p>
                Uma dentição desalinhada e com espaços significativos incomodam
                muitas pessoas. Usar aparelho nos dentes é uma das formas mais
                eficientes para que esses problemas possam ser corrigidos.
              </p>
            </li>
          </ul>
        </section>

        {/* container depoimentos */}
        <section className={styles.secao_depoimentos}>
          <h2 className={styles.subtitulo}>
            Veja o que nossos <span>clientes</span> estão falando...
          </h2>

          <div className={styles.container_depoimentos}>
            <CardDepoimento
              imagem={Cliente01}
              nome="Alberto"
              descricao="Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me
            atendeu com profissionalismo e cuidado."
            />
            <CardDepoimento
              imagem={Cliente02}
              nome="Eliana"
              descricao="Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me
            atendeu com profissionalismo e cuidado."
            />
            <CardDepoimento
              imagem={Cliente03}
              nome="Carla"
              descricao="Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me
             atendeu com profissionalismo e cuidado."
            />
          </div>
        </section>

        {/* Seção Informações */}
        <section className={styles.secao_informacoes}>
          <div className={styles.container_informacoes}>
            <MolduraInformacoes>
              <ul className={styles.lista_horarios}>
                <li>Segunda - 09:00 às 18:00</li>
                <li>Terça - 09:00 às 18:00</li>
                <li>Quarta - 09:00 às 18:00</li>
                <li>Quinta - 09:00 às 18:00</li>
                <li>Sexta - 09:00 às 17:00</li>
                <li>Sábado - 09:00 às 12:00</li>
              </ul>
            </MolduraInformacoes>

            <MolduraInformacoes>
              <div className={styles.card}>
                <figure>
                  <img
                    className={styles.img_aparelho}
                    src={Dentista01}
                    alt="Dr. Ana"
                    title="Dr. Ana"
                  />
                </figure>
                <div>
                  <p>Dra. Ana - Ortodontista</p>
                  <p>Segundas e sextas</p>
                </div>
              </div>
              <div className={styles.card}>
                <figure>
                  <img
                    className={styles.img_aparelho}
                    src={Dentista02}
                    alt="Dr. Carlos"
                    title="Dr. Carlos"
                  />
                </figure>
                <div>
                  <p>Dr. Carlos - Endodontia</p>
                  <p>Terças e quartas</p>
                </div>
              </div>
            </MolduraInformacoes>

            <MolduraInformacoes>
              <p>Ligue para agendar uma consulta:</p>
              <p>(21) 3699 - 9999</p>
              <p>(21) 97788 - 5566</p>
            </MolduraInformacoes>
          </div>
        </section>

        {/* Seção localização */}
        <section className={styles.secao_localizacao}>
          <div>
            <h2 className={styles.subtitulo}>
              Onde estamos <span>localizados?</span>
            </h2>
            <p>
              Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP:
              22775-904
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29385.675969309108!2d-43.384802570898614!3d-22.979322563917293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c2293fa63%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1611596986401!5m2!1spt-BR!2sbr"
            width="100%"
            height="350"
          ></iframe>
        </section>

        {/* Rodapé */}
        <footer className={styles.rodape}>
          <div>© Copyright 2021 | Consultório dentes saudáveis</div>
        </footer>
      </main>
    </>
  )
}
