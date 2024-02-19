import styled from "styled-components";
import theme from '../../styles/theme';

const { xs, sm } = theme.breakpoints;

const Label = styled.h1`
  align-items: center;
  background-color: black;
  color: white;
  display: flex;
  font-size: 28px;
  font-weight: 600;
  height: 64px;
  padding-left: 250px;
  width: 100%;

  @media screen and (min-width: ${xs}) and (max-width: ${sm}) {
    padding-left: 12px;
  }
`;

export default function Header() {
  return <Label>crypto.hub</Label>
}
