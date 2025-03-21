import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Necessário para export
  },
  trailingSlash: true, // Melhor para compatibilidade em hospedagem estática
};

export default nextConfig;
