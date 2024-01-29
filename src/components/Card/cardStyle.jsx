import styled from "styled-components";

export const CardContainer = styled.div`
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  display: flex;
  height: 120px;
  margin: 8px;
  padding: 16px;
  transition: 0.1s;
  width: 330px;

  &:hover { background-color: rgba(255, 255, 255, 0.1); }
  & p { font-size: 12px; }
  & div { padding-left: 10px; }

  & div > h2 {
    font-size: 20px;
    font-weight: bold;
  }

  @media (max-width: ${ ({ theme }) => theme.breakpoints.xs }) {
    height: auto;

    & div > h2 { font-size: 15px }
  }
`;
