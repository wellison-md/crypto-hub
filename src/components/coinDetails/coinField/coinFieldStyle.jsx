import styled from "styled-components";
import theme from "../../../styles/theme";

const { xs, sm } = theme.breakpoints;

export const Container = styled.div`
  display: flex;
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  justify-content: space-between;
  margin: 4px 60px;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & div p {
    margin-left: 12px;
  }

  & p:last-child {
    padding-right: 12px;
  }

  @media screen and (min-width: ${xs}) and (max-width: ${sm}) {
    margin: 0 24px;

    & div p { margin-left: 4px; }
  }
`;
