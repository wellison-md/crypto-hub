import styled from "styled-components";
import theme from '../../styles/theme';

const { xs, sm, md } = theme.breakpoints;

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
  & p:nth-of-type(2) > span { color: #00ff00; }
  & p:last-of-type > span { color: #ff0000; }
  & div { padding-left: 10px; }

  & div > h2 {
    font-size: 20px;
    font-weight: bold;
  }

  @media screen and (min-width: ${xs}) and (max-width: ${sm}) {
    width: 100%;
  }

  @media screen and (min-width: ${sm}) and (max-width: ${md}) {
    width: 312px;
  }
`;
