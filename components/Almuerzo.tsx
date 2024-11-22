import { getPlates } from "@/lib/getPlates";
import Plate from "./Plate";
import "./styles.css"; 
// Define la interfaz para el tipo Plate
interface Plate {
  id: string;
  name: string;
  plaimagen: string;
  precio: number;
}

async function Almuerzo() {
  // Añade el tipo explícito para plates
  const plates: Plate[] = await getPlates(
    "https://673629d5aafa2ef2222fb0a8.mockapi.io/menualmuerzo"
  );

  return (
    <section className="almuerzo-container">
      <h1 className="alm">Almuerzo</h1>
      <div className="grid-container">
        {/* Define el tipo explícito para plate */}
        {plates.map((plate: Plate) => (
          <Plate key={plate.id} plate={plate} />
        ))}
      </div>
    </section>
  );
}

export default Almuerzo;
