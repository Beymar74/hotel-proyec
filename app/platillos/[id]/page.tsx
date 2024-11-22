import { GetServerSideProps } from 'next';
import React from 'react';
import Headatras from '@/components/Headatras';
import Cantimaxmin from '@/components/Maxmin';
import Canconfi from '@/components/Canconfi';
import Resenas from '@/components/Resenas';
import './Platillos.css';

type PlateData = {
  plaimagen: string;
  titulo: string;
  precio: number;
  descripcion: string;
  ingredientes: string;
};

type Params = {
  id: string;
};

type Props = {
  data: PlateData;
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({ params }) => {
  const { id } = params!;

  const response = await fetch(`https://673629d5aafa2ef2222fb0a8.mockapi.io/platos/${id}`);
  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  const data: PlateData = await response.json();

  return {
    props: {
      data,
    },
  };
};

const PlatillosPage: React.FC<Props> = ({ data }) => {
  return (
    <main>
      <Headatras />
      <div className="imagen">
        <img className="plate" src={data.plaimagen} alt={data.titulo} />
      </div>
      <div className="descripcion">
        <h1 className="titulo">Platillo: {data.titulo}</h1>
        <div className="money">
          <p className="precio">
            Precio: <span className="uni">{data.precio}</span>
            <span className="bs">Bs</span>
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
};

export default PlatillosPage;
