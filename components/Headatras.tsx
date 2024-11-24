import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Headatras.css";

const Headatras = () => {
  return (
    <div className="block">
      <div className="izq">
        <Link href="/menuini" passHref>
          <Image
            className="atras"
            src="/VectorAtras.png"
            width={24} // Ajusta según tu diseño
            height={24} // Ajusta según tu diseño
            alt="Icono Atrás"
          />
        </Link>
      </div>
    </div>
  );
};

export default Headatras;
