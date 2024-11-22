import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Agrega el dominio permitido aquí
  },
};

export default nextConfig;
