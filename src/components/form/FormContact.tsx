import Contact from "../Contact";
import "./formContact.css";

function FormContact() {
  return (
    <section>
      <div className="form-container">
        <Contact />
        <iframe
          title="maps"
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.109446510196!2d-49.26072682352821!3d-25.46802063439915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce46190186223%3A0x2f0d289e9e415809!2sCroma%20Films%20-%20Pel%C3%ADculas%20para%20Prote%C3%A7%C3%A3o%20solar!5e0!3m2!1spt-BR!2sbr!4v1737476535981!5m2!1spt-BR!2sbr"
          }
          width="500"
          height="280"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default FormContact;
