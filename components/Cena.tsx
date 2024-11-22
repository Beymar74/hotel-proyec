import { getPlates } from "@/lib/getPlates";
import Plate from "./Plate";
import "./Cena.css"; // Asegúrate de tener este archivo

// Define la interfaz para el tipo Plate
interface Plate {
  id: string;
  name: string;
  plaimagen: string;
  precio: number;
}

async function Cena() {
  // Añade el tipo explícito para plates
  const plates: Plate[] = await getPlates(
    "https://673629d5aafa2ef2222fb0a8.mockapi.io/menucena"
  );

  return (
    <section className="cena-container">
      <h1 className="cena">Cena</h1>
      <div className="grid-container">
        {/* Define el tipo explícito para plate */}
        {plates.map((plate: Plate) => (
          <Plate key={plate.id} plate={plate} />
        ))}
      </div>
    </section>
  );
}

export default Cena;
