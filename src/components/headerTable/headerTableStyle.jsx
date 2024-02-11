import styled from "styled-components";

export const Button = styled.button`
  padding: 16px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  transition: 0.1s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const Header = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: ${ ({ theme }) => theme.breakpoints.xs }) {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 64px;
    left: 0;
    width: 100%;
    background-color: black;

    &button {
      max-width: 80px;
      width: 80px;
      align-items: stretch;
    }
  }

  @media (max-width: ${ ({ theme }) => theme.breakpoints.sm }) {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 64px;
    left: 0;
    width: 100%;
    background-color: black;

    &button {
      display: flex;
      width: clamp(25%, 33%, 33.34%);
      justify-content: center;
      text-align: center;
      align-items: stretch;
    }
  }
`;