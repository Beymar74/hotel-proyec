import { getPlates } from "@/lib/getPlates";
import Headatras from "@/components/Headatras";
import Cantimaxmin from "@/components/Maxmin";
import Canconfi from "@/components/Canconfi";
import Resenas from "@/components/Resenas";
import "./Platillos.css";

type PlateData = {
  plaimagen: string;
  titulo: string;
  precio: number;
  descripcion: string;
  ingredientes: string;
};

type Props = {
  params: {
    id: string;
  };
};

const PlatillosPage = async ({ params }: Props) => {
  // Obtén los datos del plato a partir de la API
  const data: PlateData = await getPlates(
    `https://673629d5aafa2ef2222fb0a8.mockapi.io/platos/${params.id}`
  );

  return (
    <main>
      {/* Componente de cabecera */}
      <Headatras />

      {/* Sección de imagen */}
      <div className="imagen">
        <img className="plate" src={data.plaimagen} alt={data.titulo} />
      </div>

      {/* Sección de descripción */}
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

      {/* Sección de ingredientes */}
      <div className="blocking">
        <h1 className="subtitulo">Ingredientes Principales</h1>
        <p className="lista">Ingredientes: {data.ingredientes}</p>
      </div>

      {/* Componentes adicionales */}
      <Cantimaxmin />
      <Canconfi />
      <Resenas />
    </main>
  );
};

export default PlatillosPage;
