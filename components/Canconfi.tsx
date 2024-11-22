import React from "react";
import Image from "next/image";
import "./Canconfi.css";
import Link from "next/link";

const Canconfi = () => {
  return (
    <section className="section">
      <button className="cancelar">
        <span>Cancelar</span>
        <Image src="/cancel.png" alt="Cancelar" width={16} height={16} />
      </button>
      <Link href="/PantallaConfirmacion" passHref>
        <button className="confirmar">
          <span>Confirmar</span>
          <Image src="/Carrito.png" alt="Carrito" width={16} height={16} />
        </button>
      </Link>
    </section>
  );
};

export default Canconfi;
