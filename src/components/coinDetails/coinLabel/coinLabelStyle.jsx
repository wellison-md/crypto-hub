import styled from "styled-components";

export const CoinLabelContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;

  & button {
    background-color: transparent;
    border: none;
    padding: 16px;
    height: inherit;
  }

  & button:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  & h2 {
    font-weight: 600;
    font-size: 20px;
    padding-left: 12px;
  }
`;