import FormContact from "@/components/form/FormContact";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Croma Films para orçamentos e informações sobre películas residenciais e empresariais em Curitiba.",
};

function page() {
  return <FormContact />;
}

export default page;
