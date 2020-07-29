import React from "react";

const Home = () => {
  return (
    <Main>
      <div>Cabecera {window.screen.width}</div>
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
  grid-template-columns: 1fr;
  grid-gap: 7px;
  margin: 0 7px;
  width: calc(100vw - 14px);
  img {
    width: 100%;
    height: calc((100vw / 1) - (7px * 2));
    object-fit: cover;
  }
  @media (min-width: 320px) {
    grid-template-columns: repeat(2, 1fr);
    img {
      height: calc((100vw - (7px * 3)) / 2);
    }
  }
  @media (min-width: 420px) {
  }
  @media (min-width: 568px) {
    grid-template-columns: repeat(3, 1fr);
    img {
      height: calc((100vw - (7px * 4)) / 3);
    }
  }
  @media (min-width: 812px) {
    grid-template-columns: repeat(4, 1fr);
    img {
      height: calc((100vw - (7px * 5)) / 4);
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
    img {
      height: calc((100vw - (7px * 6)) / 5);
    }
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(6, 1fr);
    img {
      height: calc((100vw - (7px * 7)) / 6);
    }
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
  {
    url:
      "https://storage.googleapis.com/portalfruticola/2019/07/60e79e66-uva-shutterstock_130380677-1024x683.jpg",
    name: "Uva",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://www.hogarmania.com/archivos/201208/higos-4-xl-321x171x80xX.jpg",
    name: "Higo",
    precio: "1Bs / Unidad",
  },
];
