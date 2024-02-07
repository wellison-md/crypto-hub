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

::selection {
  background-color: #8500d3;
  color: white;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.7);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(133, 35, 210);
}
`;
