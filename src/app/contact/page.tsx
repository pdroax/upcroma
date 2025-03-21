import Contact from "@/components/Contact";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Croma Films para orçamentos e informações sobre películas residenciais e empresariais em Curitiba.",
};

function page() {
  return (
    <div>
      <Contact />
    </div>
  );
}

export default page;
