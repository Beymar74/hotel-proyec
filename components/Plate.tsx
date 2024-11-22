import React from "react";
import Image from "next/image"; // Uso recomendado de next/image para optimizar las imágenes
import Link from "next/link";
import "./Plate.css";

interface PlateProps {
  plate: {
    id: string;
    name: string;
    plaimagen: string;
    precio: number;
  };
}

const Plate = ({ plate }: PlateProps) => {
  const { id, name, plaimagen, precio } = plate;

  return (
    <Link href={`/platillos/${id}`}>
      <div className="plate-container">
        {/* Usa next/image para optimización automática */}
        <Image
          src={plaimagen}
          alt={name}
          width={300}
          height={200}
          className="plate-image"
        />
        <div className="plate-details">
          <h2>{name}</h2>
          <p>Bs. {precio}</p>
        </div>
      </div>
    </Link>
  );
};

export default Plate;
