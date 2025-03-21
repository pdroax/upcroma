import "./sales.css";
import Contact from "@/components/Contact";
import Products from "@/components/layout/products/Products";

function Sales() {
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

export default Sales;
