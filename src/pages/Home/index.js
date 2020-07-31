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
              <TitleFruta className="negro texto-1linea">{f.name}</TitleFruta>
              <Precio className="texto-1linea">{f.precio}</Precio>
              <Car href="#" className="a-button">
                <RiHandbagLine />
                Al Carrito
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
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--vl-gap);
  padding: 0 var(--vl-borde-ext);
  width: calc(100vw - (2 * var(--vl-borde-ext)));

  img {
    width: 100%;
    height: calc(
      (
          100vw -
            (
              (2 * var(--vl-borde-ext)) + ((2 * var(--vl-borde-caja)) * 2) +
                (var(--vl-gap) * (2 - 1))
            )
        ) / 2
    );
    object-fit: cover;
    border-radius: 7px;
  }
  .home-destacado {
    grid-column-end: span 2;
  }
  @media (min-width: 320px) {
    grid-template-columns: repeat(3, 1fr);
    img {
      height: calc(
        (
            100vw -
              (
                (2 * var(--vl-borde-ext)) + ((2 * var(--vl-borde-caja)) * 3) +
                  (var(--vl-gap) * (3 - 1))
              )
          ) / 3
      );
    }
    .home-destacado {
      grid-column-end: span 3;
    }
  }
  @media (min-width: 420px) {
    grid-template-columns: repeat(4, 1fr);
    img {
      height: calc(
        (
            100vw -
              (
                (2 * var(--vl-borde-ext)) + ((2 * var(--vl-borde-caja)) * 4) +
                  (var(--vl-gap) * (4 - 1))
              )
          ) / 4
      );
    }
    .home-destacado {
      grid-column-end: span 4;
    }
  }
  @media (min-width: 568px) {
    grid-template-columns: repeat(5, 1fr);
    img {
      height: calc(
        (
            100vw -
              (
                (2 * var(--vl-borde-ext)) + ((2 * var(--vl-borde-caja)) * 5) +
                  (var(--vl-gap) * (5 - 1))
              )
          ) / 5
      );
    }
    .home-destacado {
      grid-column-end: span 5;
    }
  }
  @media (min-width: 812px) {
    grid-template-columns: repeat(6, 1fr);
    img {
      height: calc(
        (
            100vw -
              (
                (2 * var(--vl-borde-ext)) + ((2 * var(--vl-borde-caja)) * 6) +
                  (var(--vl-gap) * (6 - 1))
              )
          ) / 6
      );
    }
    .home-destacado {
      grid-column-end: span 6;
    }
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1440px) {
  }
`;

const TitleDestacado = styled.div`
  grid-column-start: 1;
  display: flex;
  align-items: center;
  font-size: var(--title1);
  height: 25px;
  padding-top: var(--vl-borde-caja);
`;

const Fruta = styled.div`
  background-color: white;
  border-radius: var(--vl-border-radius);
  padding: var(--vl-borde-caja);
`;

const Descripcion = styled.div`
  font-size: var(--normal);
  display: grid;
  /* grid-template-rows: 33px 14px 16px; */
  align-items: center;
`;

const TitleFruta = styled.div`
  align-self: start;
  font-size: var(--title2);
`;

const Precio = styled.div`
  align-self: center;
  font-size: var(--normal);
`;

const Car = styled.a`
  font-size: var(--chica);
  letter-spacing: var(--vl-space-chica);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
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
