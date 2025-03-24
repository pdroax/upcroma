import { Metadata } from "next";
import Home from "@/components/Home";


export const metadata: Metadata = {
  title: "Início",
  description:
    "Especialistas em películas residenciais e empresariais em Curitiba desde 2008. Proteção solar, segurança e privacidade para seu ambiente.",
};

export default function page() {
  return <Home />;
}
