import { Metadata } from "next";
import "./aboutus.css";
import FormContact from "@/components/form/FormContact";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a história da Croma Films, especialista em películas em Curitiba desde 2008. Nossa experiência e compromisso com qualidade.",
};

export default function AboutUs() {
  return (
    <section className="about-container">
      <div className="about-us">
        <h1 className="title">Sobre nós</h1>
        <br />
        <div className="text-about">
          <p>
            A Croma Films nasceu em 2008, partindo da necessidade de atendimento
            mais personalizado no mercado de películas solares. Oferecendo
            serviços de instalação de películas solares em Curitiba e região,
            garantimos aos nossos clientes, residenciais e empresariais,
            durabilidade e eficiência em nossos produtos. Além da instalação na
            região de Curitiba, a Croma Films oferece revenda de películas para
            todo o Brasil.
          </p>
          <br />
          <p>
            Compreendemos a necessidade dos nossos clientes de segurança,
            privacidade e autonomia dentro de suas residências e comércios, por
            isso, focamos em um atendimento rápido e único baseado em suas
            prioridades. Nossa missão é o seu conforto e segurança. Venha
            conhecer <a href="/sales">nossas películas</a> e{" "}
            <a href="/install">o que podemos fazer por você</a>.
          </p>
        </div>
      </div>

      <div className="bg-img"></div>

      <div id="contact">
        <FormContact />
      </div>
    </section>
  );
}
