import { useState } from "react";
import Image from "next/image";
import "./Instalation.css";

function Instalation() {
  // Lista das imagens com caminhos atualizados
  const images = [
    "/images/instalacao/foto1.jpeg",
    "/images/instalacao/foto2.jpeg",
    "/images/instalacao/foto3.jpeg",
    "/images/instalacao/foto4.jpg",
    "/images/instalacao/foto5.jpg",
    "/images/instalacao/foto6.jpg",
    "/images/instalacao/foto7.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0); // Índice da imagem atual

  const nextImage = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1); // Avança uma posição
    } else {
      setCurrentIndex(0); // Volta para o início
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Volta uma posição
    } else {
      setCurrentIndex(images.length - 3); // Vai para o final
    }
  };

  return (
    <div className="slide">
      <div className="carousel">
        <button className="carouselButtonLeft" onClick={prevImage}>
          &#8249; {/* Símbolo de seta para a esquerda */}
        </button>

        <div
          className="carouselImagesWrapper"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="imageWrapper">
              <Image
                src={img}
                alt={`Instalação ${index + 1}`}
                width={400}
                height={300}
                className="carouselImage"
                priority={index < 3} // Prioriza o carregamento das 3 primeiras imagens
                quality={85}
              />
            </div>
          ))}
        </div>

        <button className="carouselButtonRight" onClick={nextImage}>
          &#8250; {/* Símbolo de seta para a direita */}
        </button>
      </div>
    </div>
  );
}

export default Instalation;
