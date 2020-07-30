import React from "react";
import { Head } from "../../components/Head";
import { Delivery } from "../../components/Delivery";
import { Categorias } from "../../components/Categorias";
import { RiHandbagLine } from "react-icons/ri";

const Home = () => {
  return (
    <Main>
      <Head />
      <Delivery />
      <Categorias />
      <Contenedor>
        <TitleDestacado className="negro home-destacado">
          Productos Destacados
        </TitleDestacado>
        {arrFrutas.map((f, i) => (
          <Fruta key={"fruta-" + i}>
            <img src={f.url} />
            <Descripcion>
              <TitleFruta className="negro">{f.name}</TitleFruta>
              <div>{f.precio}</div>
              <Car>
                <RiHandbagLine />
                Añadir al Carrito
              </Car>
            </Descripcion>
          </Fruta>
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
  padding: 0 7px;
  width: calc(100vw - 14px);

  img {
    width: 100%;
    height: calc((100vw / 1) - (7px * 2));
    object-fit: cover;
    /* border-top-left-radius: 10px;
    border-top-right-radius: 10px; */
    border-radius: 7px;
  }
  @media (min-width: 320px) {
    grid-template-columns: repeat(2, 1fr);
    img {
      height: calc((100vw - (7px * (1 + 2 + (2 * 2)))) / 2);
    }
    .home-destacado {
      grid-column-end: span 2;
    }
  }
  @media (min-width: 420px) {
  }
  @media (min-width: 568px) {
    grid-template-columns: repeat(3, 1fr);
    img {
      height: calc((100vw - (7px * (1 + 3 + (2 * 3)))) / 3);
    }
    .home-destacado {
      grid-column-end: span 3;
    }
  }
  @media (min-width: 812px) {
    grid-template-columns: repeat(4, 1fr);
    img {
      height: calc((100vw - (7px * (1 + 4 + (2 * 4)))) / 4);
    }
    .home-destacado {
      grid-column-end: span 4;
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
    img {
      height: calc((100vw - (7px * (1 + 5 + (2 * 5)))) / 5);
    }
    .home-destacado {
      grid-column-end: span 5;
    }
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(6, 1fr);
    img {
      height: calc((100vw - (7px * (1 + 6 + (2 * 6)))) / 6);
    }
    .home-destacado {
      grid-column-end: span 6;
    }
  }
`;

const TitleDestacado = styled.div`
  grid-column-start: 1;
  font-size: 20px;
  height: 25px;
  padding-top: 5px;
`;

const Fruta = styled.div`
  background-color: white;
  border-radius: 7px;
  padding: 7px;
`;

const TitleFruta = styled.div`
  font-size: 18px;
`;

const Descripcion = styled.div`
  /* padding: 0 10px 10px 10px; */
  display: grid;
  align-items: center;
`;

const Car = styled.div`
  cursor: pointer;
  /* background-color: white;
  border-radius: 7px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    font-size: 16px;
    margin-right: 4px;
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
