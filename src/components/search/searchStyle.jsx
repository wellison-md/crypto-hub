import styled from "styled-components";

export const WindowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;

  & input {
    position: absolute;
    top: 50%;
    left: 25%;

  }

  @media screen and (min-width: 320px) and (max-width: 576px) {}

  @media screen and (min-width: 576px) and (max-width: 768px) {}

  @media screen and (min-width: 768px) and (max-width: 992px) {}

  @media screen and (min-width: 992px) and (max-width: 1200px) {}

  @media screen and (min-width: 1200px) and (max-width: 1366px) {}

  @media screen and (min-width: 1366px) and (max-width: 1600px) {}

  @media screen and (min-width: 1600px) and (max-width: 1920px) {}

`;
