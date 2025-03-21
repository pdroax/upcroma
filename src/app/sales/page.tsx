import { Metadata } from "next";
import "./sales.css";
import Contact from "@/components/Contact";
import Products from "@/components/layout/products/Products";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Conheça nossa linha completa de películas residenciais e empresariais. Soluções em proteção solar, segurança e privacidade.",
};

export default function Sales() {
  return (
    <section className="sales-container">
      <div className="content">
        <div className="text-intro">
          <h1>Produtos</h1>
          <h2>
            Encontre aqui os modelos mais eficientes com as melhores negociações
          </h2>
        </div>
        <Products />
      </div>
      <div className="bg"></div>
      <div id="contact">
        <Contact />
      </div>
    </section>
  );
}
