import Products from "@/components/layout/products/Products";
import "./install.css";
import Contact from "@/components/Contact";

function Install() {
  return (
    <section className="install-container">
      {/* Vídeo estático */}
      <div className="content">
        <div className="text-intro">
          <h1>Instalação</h1>
          <h2>
            Sua próxima película com consultoria especializada e equipe
            altamente qualificada
          </h2>
        </div>
        <Products />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </section>
  );
}

export default Install;
