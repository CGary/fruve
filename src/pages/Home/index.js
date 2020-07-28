import React from "react";

const Home = () => {
  return (
    <Main>
      <div>Cabecera</div>
      <div>Envio a domicilio</div>
      <div>Categorias</div>
      <Contenedor>
        {arrFrutas.map((f, i) => (
          <div key={"fruta-" + i}>
            <img src={f.url} />
            <div>{f.name}</div>
            <div>{f.precio}</div>
            <div>Añadir al carrito</div>
          </div>
        ))}
      </Contenedor>
    </Main>
  );
};

export default Home;

import styled from "styled-components";
import { ContentBase } from "../../styles/commonStyles";
const Main = styled(ContentBase)`
  height: 100vh;
`;
const Contenedor = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  width: 100vw;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;

const arrFrutas = [
  {
    url:
      "https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/article/5e53c4125bafe801dabfb62f/comer-semillas-manzana.jpg",
    name: "Manzana",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://imparcialoaxaca.mx/wp-content/uploads/2018/08/DlXk9BqXsAU7Xvl_1024x684.jpg",
    name: "Manzana Verde",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://dam.cocinafacil.com.mx/wp-content/uploads/2018/05/propiedades-de-la-pera-salud-belleza.jpg",
    name: "Pera",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://static2.abc.es/media/bienestar/2019/07/25/platano-beneficios-kIyF--620x349@abc.jpg",
    name: "Plátano",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/gallery/59799f115bafe8f88e3c989a/kiwi-int.jpg",
    name: "Kiwi",
    precio: "1Bs / Unidad",
  },
  {
    url: "http://campalfrutas.com/wp-content/uploads/2017/09/pessego.jpg",
    name: "Durazno",
    precio: "1Bs / Unidad",
  },
];
