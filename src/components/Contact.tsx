import ProjectForm from "./project/ProjectForm";
import "./Contact.css";

function Contact() {
  return (
    <div className={`contact-container`}>
      <h1>Contato</h1>
      <p>Deixe sua mensagem e um de nossos colaboradores irá retornar</p>
      <ProjectForm />
    </div>
  );
}
export default Contact;
