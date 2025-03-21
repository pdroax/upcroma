import { Metadata } from "next";
import "./aboutus.css";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a história da Croma Films, especialista em películas em Curitiba desde 2008. Nossa experiência e compromisso com qualidade.",
};

export default function AboutUs() {
  return (
    <main className="about-container">
      <section className="about-hero">
        <h1>Nossa História</h1>
        <p>Desde 2008 transformando ambientes em Curitiba</p>
      </section>

      <section className="about-content">
        <div className="mission">
          <h2>Missão</h2>
          <p>
            Proporcionar conforto e segurança através de soluções em películas
          </p>
        </div>

        <div className="values">
          <h2>Valores</h2>
          <ul>
            <li>Qualidade</li>
            <li>Compromisso</li>
            <li>Inovação</li>
            <li>Atendimento personalizado</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
