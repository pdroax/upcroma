import Contact from "@/components/Contact";
import "./aboutus.css";

export default function AboutUs() {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1>Sobre nós</h1>

        <div className="about-text">
          <p>
            A Croma Films nasceu em 2008, partindo da necessidade de atendimento
            mais personalizado no mercado de películas solares. Oferecendo
            serviços de instalação de películas solares em Curitiba e região,
            garantimos aos nossos clientes, residenciais e empresariais,
            durabilidade e eficiência em nossos produtos. Além da instalação na
            região de Curitiba, a Croma Films oferece revenda de películas para
            todo o Brasil.
          </p>

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

      <div className="about-image" />

      <div id="contact">
        <Contact />
      </div>
    </section>
  );
}
