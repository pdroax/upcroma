"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="ajust_navbar">
        <ul className={`list ${isMenuOpen ? "activeMenu" : ""}`}>
          <li className="item">
            <Link
              href="/install"
              onClick={() => {
                toTop();
                closeMenu();
              }}
              className={pathname == "/install/" ? "active" : ""}
            >
              Instalação
            </Link>
          </li>
          <li className="item">
            <Link
              href="/sales"
              onClick={() => {
                toTop();
                closeMenu();
              }}
              className={pathname == "/sales/" ? "active" : ""}
            >
              Produtos
            </Link>
          </li>
          <li className="item">
            <Link
              href="/blog"
              onClick={() => {
                toTop();
                closeMenu();
              }}
              className={pathname == "/blog/" ? "active" : ""}
            >
              Blog
            </Link>
          </li>
          <div className="logo">
            <Link href="/" onClick={toTop}>
              <Image
                className="img"
                src="/images/croma-logo.png"
                alt="Croma films"
                width={200}
                height={50}
                priority
              />
            </Link>
          </div>
          <li className="item">
            <Link
              href="/"
              onClick={() => {
                toTop();
                closeMenu();
              }}
              className={pathname == "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li className="item">
            <Link
              href="/aboutus"
              onClick={() => {
                toTop();
                closeMenu();
              }}
              className={pathname == "/aboutus/" ? "active" : ""}
            >
              Sobre nós
            </Link>
          </li>
          <li className="item">
            {/* <Link
              href="/contact"
              onClick={() => {
                toTop();
                closeMenu();
              }}
              className={pathname === "/contact/" ? "active" : ""}
            >
              Contato
            </Link> */}
            <a href="#contact">
              Contato
            </a>
          </li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        </div>
      </div>
      <div className="logoMobile">
        <Link
          href="/"
          onClick={() => {
            toTop();
            closeMenu();
          }}
        >
          <Image
            className="imgMob"
            src="/images/croma-logo.png"
            alt="Croma films"
            width={130}
            height={32}
            priority
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;


