import Contact from "./Contact";
import Rates from "./layout/Rates";
import "./home.css";

export default function Home() {
  return (
    <div className="home-wrapper">
      <section className="home-hero-section">
        <div className="home-video-wrapper">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/poster-video.jpg"
            preload="metadata"
            aria-label="Vídeo demonstrativo de aplicação de películas"
          >
            <source src="/videos/videoWoman.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>

          <div className="home-hero-content">
            <h1>
              Transforme seu ambiente com <span>Croma Films</span>
            </h1>
            <h2>Segurança, conforto ou privacidade: nós somos a solução.</h2>
            <div className="home-pitch-text">
              <p>
                Desde 2008 no mercado, a Croma Films é especializada em revenda
                de películas pelo Brasil e instalação de películas residenciais
                ou empresariais em Curitiba e região. Contamos com grande
                variedade de películas com garantia de atendimento rápido e
                efetivo.
              </p>
            </div>
            <a href="#contact" className="home-cta-button">
              Faça um orçamento
            </a>
          </div>
        </div>
      </section>

      <section className="home-rates-section" aria-label="Tabela de preços">
        <div className="home-rates-container">
          <Rates />
        </div>
      </section>
      <div
        className="home-installation-bg"
        aria-label="Imagens de películas instaladas"
      ></div>
      <section id="contact" className="home-contact-section">
        <Contact />
      </section>
    </div>
  );
}
