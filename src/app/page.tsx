import { Metadata } from "next";
import Contact from "@/components/Contact";
import Rates from "../components/layout/Rates";
import "./page.css";

export const metadata: Metadata = {
  title: "Início",
  description:
    "Especialistas em películas residenciais e empresariais em Curitiba desde 2008. Proteção solar, segurança e privacidade para seu ambiente.",
};

export default function Home() {
  return (
    <main className="home-container">
      <section className="hero-section">
        <div className="video-container">
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

          <div className="content">
            <h1>
              Transforme seu ambiente com <span>Croma Films</span>
            </h1>
            <h2>Segurança, conforto ou privacidade: nós somos a solução.</h2>
            <div className="pitch-text">
              <p>
                Desde 2008 no mercado, a Croma Films é especializada em revenda
                de películas pelo Brasil e instalação de películas residenciais
                ou empresariais em Curitiba e região. Contamos com grande
                variedade de películas com garantia de atendimento rápido e
                efetivo.
              </p>
            </div>
            <a href="#contact" className="cta-button">
              Faça um orçamento
            </a>
          </div>
        </div>
      </section>

      <section className="rates-section" aria-label="Tabela de preços">
        <div className="rates-container">
          <Rates />
        </div>
      </section>

      <section id="contact" className="contact-section">
        <Contact />
      </section>
    </main>
  );
}
