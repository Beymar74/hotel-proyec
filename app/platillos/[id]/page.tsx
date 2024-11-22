import { getPlates } from "@/lib/getPlates";
import Headatras from "@/components/Headatras";
import Cantimaxmin from "@/components/Maxmin";
import Canconfi from "@/components/Canconfi";
import Resenas from "@/components/Resenas";
import Image from "next/image";
import "./Platillos.css";

// Tipo para los datos del plato
type PlateData = {
  plaimagen: string;
  titulo: string;
  precio: number;
  descripcion: string;
  ingredientes: string;
};

// Tipo para los props de la página
type PlatillosPageProps = {
  params: {
    id: string;
  };
};

// Componente principal de la página
export default async function PlatillosPage({ params }: PlatillosPageProps) {
  const { id } = params;

  try {
    const data: PlateData = await getPlates(
      `https://673629d5aafa2ef2222fb0a8.mockapi.io/platos/${id}`
    );

    return (
      <main>
        <Headatras />
        <div className="imagen">
          <Image
            className="plate"
            src={data.plaimagen}
            alt={data.titulo}
            width={500}
            height={300}
          />
        </div>
        <div className="descripcion">
          <h1 className="titulo">Platillo: {data.titulo}</h1>
          <div className="money">
            <p className="precio">
              Precio: <span className="uni">{data.precio}</span>
              <span className="bs"> Bs</span>
            </p>
          </div>
          <div className="blockdes">
            <p className="descripcion">Descripción: {data.descripcion}</p>
          </div>
        </div>
        <div className="blocking">
          <h1 className="subtitulo">Ingredientes Principales</h1>
          <p className="lista">Ingredientes: {data.ingredientes}</p>
        </div>
        <Cantimaxmin />
        <Canconfi />
        <Resenas />
      </main>
    );
  } catch (error) {
    console.error("Error fetching plate data:", error);
    return <p>Error al cargar los datos del platillo.</p>;
  }
}
