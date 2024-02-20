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
`;
