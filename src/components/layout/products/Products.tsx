import React, { useState } from "react";
import "./Products.css";
import { products } from "./productData";

interface Gradation {
  name: string;
  image: string;
  visibility?: string;
  solarEnergy?: string;
  uvTransmission?: string;
}

interface Product {
  name: string;
  description?: string;
  gradations: Gradation[];
}

interface SelectedGraduations {
  [key: number]: string;
}

const DEFAULT_IMAGE = "/images/default.jpg";

function Products() {
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [selectedGraduation, setSelectedGraduation] =
    useState<SelectedGraduations>({});

  const toggleCard = (index: number): void => {
    setOpenCard(openCard === index ? null : index);
    if (openCard !== index) {
      setSelectedGraduation((prevState) => {
        const newState: SelectedGraduations = {};
        newState[index] = prevState[index] || "Sem película";
        return newState;
      });
    }
  };

  const getGraduationImage = (
    productIndex: number,
    graduation: string
  ): string => {
    const product = products[productIndex] as Product;
    const gradImage = product.gradations.find(
      (grad) => grad.name === graduation
    )?.image;
    return gradImage || DEFAULT_IMAGE;
  };

  const handleGraduationClick = (
    productIndex: number,
    graduation: string
  ): void => {
    setSelectedGraduation((prevState) => ({
      ...prevState,
      [productIndex]: graduation,
    }));
  };

  const findGradation = (
    product: Product,
    graduationName: string
  ): Gradation | undefined => {
    return product.gradations.find((grad) => grad.name === graduationName);
  };

  return (
    <section className="products-container">
      <div>
        <ul className="products">
          {products.map((product: Product, productIndex: number) => (
            <li
              key={productIndex}
              className={`product ${openCard === productIndex ? "open" : ""}`}
            >
              <div className="image-container">
                <img
                  className="image"
                  src={
                    selectedGraduation[productIndex]
                      ? getGraduationImage(
                          productIndex,
                          selectedGraduation[productIndex]
                        )
                      : DEFAULT_IMAGE
                  }
                  alt={product.name}
                />
                <h3>
                  {product.name}{" "}
                  {selectedGraduation[productIndex] &&
                  selectedGraduation[productIndex] !== "Sem película"
                    ? `- ${selectedGraduation[productIndex]}`
                    : ""}
                </h3>
                <p>{product.description}</p>
                {selectedGraduation[productIndex] &&
                  selectedGraduation[productIndex] !== "Sem película" && (
                    <div className="graduation-description">
                      {(() => {
                        const selectedGrad = findGradation(
                          product,
                          selectedGraduation[productIndex]
                        );
                        return (
                          <>
                            {selectedGrad?.visibility && (
                              <p>
                                <strong>Transmissão de Visibilidade:</strong>{" "}
                                {selectedGrad.visibility}
                              </p>
                            )}
                            {selectedGrad?.solarEnergy && (
                              <p>
                                <strong>Transmissão de Energia Solar:</strong>{" "}
                                {selectedGrad.solarEnergy}
                              </p>
                            )}
                            {selectedGrad?.uvTransmission && (
                              <p>
                                <strong>Transmissão de UV:</strong>{" "}
                                {selectedGrad.uvTransmission}
                              </p>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  )}

                {product.gradations.length > 0 && (
                  <>
                    <h4 onClick={() => toggleCard(productIndex)}>
                      Aplicações:
                    </h4>
                    <ul>
                      {product.gradations.map(
                        (gradation: Gradation, index: number) => (
                          <li
                            key={index}
                            onClick={() =>
                              handleGraduationClick(
                                productIndex,
                                gradation.name
                              )
                            }
                            style={{ cursor: "pointer", color: "#007BFF" }}
                          >
                            {gradation.name}
                          </li>
                        )
                      )}
                    </ul>
                  </>
                )}
                <button
                  className="expand-button"
                  onClick={() => toggleCard(productIndex)}
                  type="button"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Products;
