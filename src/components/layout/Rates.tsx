"use client";

import { useEffect } from "react";
import "./Rates.css";

function Rates() {
  useEffect(() => {
    // Carrega o script do Elfsight de forma dinâmica
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpa o script quando o componente é desmontado
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="rates-container">
      <div
        className="elfsight-app-ffe5d2e3-89cb-4523-b29b-3c90fad22762"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}

export default Rates;
