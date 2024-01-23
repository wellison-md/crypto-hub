import { createGlobalStyle } from "styled-components";
import bg from '../assets/bg/bg2.jpg';
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-image: url(${bg});
    background-size: cover;
  }
`;
