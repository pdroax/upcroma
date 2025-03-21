import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, a página que você procura não existe.</p>
      <Link href="/" className="back-home">
        Voltar para a página inicial
      </Link>
    </main>
  );
}
