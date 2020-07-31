import React from "react";
import { RiMenuLine, RiShoppingCartLine, RiSearch2Line } from "react-icons/ri";

export const Head = () => {
  return (
    <Main>
      <RiMenuLine />
      <Logo>SOALNI Alimentos</Logo>
      <RiSearch2Line />
      <RiShoppingCartLine className="head-rigth" />
    </Main>
  );
};

import styled from "styled-components";

const Main = styled.div`
  width: calc(100vw - (2 * var(--vl-borde-ext)));
  padding: 5px var(--vl-borde-ext);
  background-color: white;
  display: grid;
  grid-template-columns: 29px auto repeat(2, 29px);
  grid-template-rows: 29px;
  align-items: center;
  justify-items: start;
  .head-rigth {
    justify-self: end;
  }
`;

const Logo = styled.div`
  font-size: var(--title1);
  color: var(--cr-negro);
`;
