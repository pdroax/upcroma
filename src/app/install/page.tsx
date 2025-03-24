import Products from "@/components/layout/products/Products";
import "./install.css";
import Contact from "@/components/Contact";
import { Html, Head } from "next/document";

function Install() {
  return (
    <Html>
      <Head>
        {/* Google tag (gtag.js) --> */} 
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-737613236"></script> 
        <script  
              dangerouslySetInnerHTML={{
              __html: 
                `window.dataLayer = window.dataLayer || []; 
                function gtag(){
                  dataLayer.push(arguments);
                } gtag('js', new Date()); 
                gtag('config', 'AW-737613236');`,}}
        />

      </Head>
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
    </Html>
  );
}

export default Install;
