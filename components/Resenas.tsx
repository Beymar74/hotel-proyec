import React from "react";
import Image from "next/image";
import "./Resenas.css";

const Resenas = () => {
  return (
    <section className="blockresenas">
      <h1 className="title">Reseñas</h1>
      <div className="coment">
        <Image
          className="perfil"
          src="/avatar.png"
          width={50}
          height={50}
          alt="Perfil"
        />
        <div className="comentario">
          <div className="estrellitas">
            <Image src="/star.png" alt="Estrella" width={16} height={16} />
            <Image src="/star.png" alt="Estrella" width={16} height={16} />
            <Image src="/star.png" alt="Estrella" width={16} height={16} />
            <Image src="/star.png" alt="Estrella" width={16} height={16} />
            <Image src="/star.png" alt="Estrella" width={16} height={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resenas;
