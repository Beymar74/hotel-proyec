type PlateData = {
    plaimagen: string;
    titulo: string;
    precio: number;
    descripcion: string;
    ingredientes: string;
  };
  
  export async function getPlates(url: string): Promise<PlateData> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data from ${url}`);
    }
    const data: PlateData = await response.json();
    return data;
  }
  