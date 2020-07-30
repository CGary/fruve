import React from "react";
import { RiMenuLine, RiShoppingCartLine, RiSearch2Line } from "react-icons/ri";

export const Head = () => {
  return (
    <Main>
      <RiMenuLine />
      <Logo>Logo</Logo>
      <RiSearch2Line />
      <RiShoppingCartLine className="head-rigth" />
    </Main>
  );
};

import styled from "styled-components";

const Main = styled.div`
  width: calc(100vw - 14px);
  padding: 5px 7px;
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

const Logo = styled.div``;
