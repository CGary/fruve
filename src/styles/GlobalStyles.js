import { createGlobalStyle } from "styled-components";
import Roboto from "../fonts/Roboto-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: Roboto;
    src: url(${Roboto});
  }
  body {
    font-family: Roboto;
    color: #666;
    background-color: #f2f2f2;
    font-size: 13px;
  }
  svg {
    font-size: 22px;
  }


  .negro {
    color: #333;
  }
`;
