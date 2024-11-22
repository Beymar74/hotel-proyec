import { getPlates } from "@/lib/getPlates"; // Asegúrate de que este archivo esté correctamente configurado
import Plate from "./Plate"; // Componente Plate correctamente implementado
import "./Desayuno.css"; // Archivo de estilos específico para Desayuno

// Define la interfaz para el tipo Plate
interface Plate {
  id: string;
  name: string;
  plaimagen: string;
  precio: number;
}

// Componente Desayuno
async function Desayuno() {
  // Obtén los platos desde la API
  const plates: Plate[] = await getPlates(
    "https://673629d5aafa2ef2222fb0a8.mockapi.io/menudesayuno"
  );

  return (
    <section className="desayuno-container">
      <h1 className="des">Desayuno</h1>
      <div className="grid-container">
        {/* Itera sobre los platos y renderiza el componente Plate */}
        {plates.map((plate) => (
          <Plate key={plate.id} plate={plate} />
        ))}
      </div>
    </section>
  );
}

export default Desayuno;
