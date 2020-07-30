import React from "react";
import { GrDeliver } from "react-icons/gr";

export const Delivery = () => {
  return (
    <Main>
      <GrDeliver />
      Envios a Domicilio y Normas de bioseguridad
    </Main>
  );
};

import styled from "styled-components";

const Main = styled.div`
  width: calc(100vw - 14px);
  margin: 5px 7px;
  display: grid;
  grid-template-columns: 29px auto;
  grid-template-rows: 29px;
  align-items: center;
  justify-items: start;
`;
