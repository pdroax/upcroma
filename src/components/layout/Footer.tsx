import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerItems">
        <ul className="address">
          <li>
            <Link href="/">
              <img
                className="footerLogo"
                src="/images/logo-croma-films.png"
                style={{ width: 200 }}
                alt="Logo Croma"
              />
            </Link>
          </li>
          <li className="listLink">
            <Link
              target="blank"
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.109446510196!2d-49.26072682352821!3d-25.46802063439915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce46190186223%3A0x2f0d289e9e415809!2sCroma%20Films%20-%20Pel%C3%ADculas%20para%20Prote%C3%A7%C3%A3o%20solar!5e0!3m2!1spt-BR!2sbr!4v1737476535981!5m2!1spt-BR!2sbr"
            >
              Av. da República, 4370 - 1º andar - sala 13 - Parolin, Curitiba -
              PR, 80220-430
            </Link>
          </li>
        </ul>
        <ul className="services">
          <li>
            <Link href="/install">Instalação</Link>
          </li>
          <li>
            <Link href="/sales">Revenda</Link>
          </li>
        </ul>

        <ul className="social-list">
          <li>
            <div className="hour">
              <h4>Horário de atendimento:</h4>
              <p>Segunda a Sexta</p>
              <p>8h as 18h</p>
            </div>
          </li>
          <li>
            <Link href="mailto:croma@cromafilms.com.br">
              croma@cromafilms.com.br
            </Link>
          </li>
          <li>
            <Link href="https://wa.me/554133442029?text=Olá,%20Gostaria%20de%20saber%20mais%20sobre%20películas.">
              (41)3344-2029
            </Link>
          </li>
          <li>
            <Link
              className="whatsApp"
              href="https://wa.me/554133442029?text=Olá,%20Gostaria%20de%20saber%20mais%20sobre%20películas."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </Link>
          </li>
          <li>
            <br />
            <FaInstagram />
          </li>
        </ul>
      </div>
      <p className="copyright">
        &copy; 2024 <span>Croma Films</span> - Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
